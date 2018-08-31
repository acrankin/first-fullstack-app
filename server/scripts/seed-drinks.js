const client = require('../db-client');
const drinks = require('./drinks.json');

Promise.all(
  drinks.map(drink => {
    return client.query(`
      INSERT INTO drinks(
        spirit_id, name, base_spirit, year, contains_egg, image
      )
      SELECT
        id as spirit_id,
        $1 as name,
        $2 as year,
        $3 as contains_egg,
        $4 as image
      FROM spirits
      WHERE name = $5;  
    `,
    [drink.name, drink.year, drink.containsEgg, drink.image, drink.baseSpirit]
  );
  })
)
  .then(
    () => console.log('seed drink data load successful'),
    err=> console.error(err)
  )
  .then(() => client.end());