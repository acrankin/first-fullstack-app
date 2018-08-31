const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS spirits (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) UNIQUE NOT NULL,
      color VARCHAR(256) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS drinks (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      base_spirit VARCHAR(256) NOT NULL REFERENCES spirits(name),
      year INTEGER,
      contains_egg BOOLEAN,
      image VARCHAR(256) 
    );
`)
  .then(
    () => console.log('create tables complete homeboy!!!'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });