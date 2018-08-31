const client = require('../db-client');
const spirits = require('./spirits.json');

Promise.all(
  spirits.map(spirit => {
    return client.query(`
      INSERT INTO spirits (name, color)
      VALUES ($1, $2);
    `,
    [spirit.name, spirit.color]
    );
  })
)
  .then(
    () => console.log('spirits seed data load successful'),
    err => console.error(err)
  )
    .then(() => client.end());