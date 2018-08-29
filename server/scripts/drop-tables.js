const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/beverages';
const client = new Client(databaseUrl);

client.connect()
    .then(() => {
        return client.query(`
            DROP TABLE IF NOT EXISTS drinks;
        `);
    })
    .then(
        () => console.log('drop tables complete homeboy!!!'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });