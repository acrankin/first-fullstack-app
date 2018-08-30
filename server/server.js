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
        id,
        name,
        base_spirit,
        year,
        contains_egg,
        image
      FROM drinks;
    `)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => console.log(err));
});

app.get('/api/drinks/:id', (req, res) => {
  client.query(`
    SELECT
      id,
      name,
      base_spirit,
      year,
      contains_egg,
      image
    FROM drinks
    WHERE id = $1;
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
        INSERT INTO drinks (name, base_spirit, year, contains_egg, image)
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