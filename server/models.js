var db = require('../database/index.js');

module.exports = {
  players: {
    get: function(callback) {
      db.query('select * from randomTeams', function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })
    },
    post: function(player, callback) {
      //might need to come back to this at some point
      var query = `insert into randomTeams (player) values ("${player}");`
      db.query(query, function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })
    }
  }
}