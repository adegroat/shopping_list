const pgp = require('pg-promise')();

// Very bad to store credentials this way. 
// I'm only doing this so the app can be cloned and ran easily.
const db = pgp('postgres://postgres:K3tid2z7963wntWzCZmO@shopping-list-db.canzufdxj7gv.us-west-2.rds.amazonaws.com:5432/shoppinglists');

module.exports = db;