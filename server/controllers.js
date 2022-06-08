var models = require('./models.js')

module.exports = {
  players: {
    get: function (req, res) {
      models.players.get((err, results) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.send(results);
        }
      });
    },
    post: function (req, res) {
      models.players.post(req.body.data, (err, results) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.send(results);
        }
      });
    }
  }
}