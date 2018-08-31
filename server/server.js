const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/beverages';
const client = new Client(databaseUrl);
client.connect();

app.get('/api/drinks', (req, res) => {
    client.query(`
      SELECT
        d.id,
        d.name,
        s.id as spirit_id,
        s.name as "baseSpirit",
        d.year,
        d.contains_egg,
        d.image
      FROM drinks as d
      JOIN spirits as s
      ON d.spirit_id = s.id
      ORDER BY d.name;
    `)
      .then(result => {
        res.send(result.rows);
        console.log(result);
      })
      .catch(err => console.log(err));
});

app.get('/api/drinks/:id', (req, res) => {
  client.query(`
    SELECT
      d.id,
      d.name,
      s.id as spirit_id,
      s.name as "baseSpirit",
      d.year,
      d.contains_egg,
      d.image
    FROM drinks as d
    JOIN spirits as s
    ON d.spirit_id = s.id
    WHERE d.id = $1;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.post('/api/drinks', (req, res) => {
    const body = req.body;
    console.log(body);
    client.query(`
        INSERT INTO drinks (name, spirit_id, year, contains_egg, image)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `,
    [body.name, body.baseSpirit, body.year, body.containsEgg, body.image]
    )
        .then(result => {
          console.log(result.rows[0]);
          res.send(result.rows[0]);
        })
        .catch(err => console.log(err));
});

const PORT = 3000;

app.listen(PORT, () => console.log('app is running!'));