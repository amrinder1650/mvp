var mysql = require('mysql');

var db = mysql.createConnection({
  user: 'root',
  database: 'randomTeams_db'
})

db.connect();

module.exports = db;