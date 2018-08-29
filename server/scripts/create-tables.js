const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/beverages';

const client = new Client(databaseUrl);

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE IF NOT EXISTS drinks (
                id SERIAL PRIMARY KEY,
                name VARCHAR(256) NOT NULL,
                base_spirit VARCHAR(256) NOT NULL,
                year INTEGER,
                contains_egg BOOLEAN,
                image VARCHAR(256) 
            );
        `);
    })
    .then(
        () => console.log('create tables complete homeboy!!!'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });