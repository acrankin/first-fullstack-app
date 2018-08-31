const client = require('../db-client');

client.query(`
            DROP TABLE IF EXISTS drinks;
            DROP TABLE IF EXISTS spirits;
        `)
            .then(
                () => console.log('drop tables complete homeboy!!!'),
                err => console.log(err)
            )
            .then(() => {
                client.end();
            });