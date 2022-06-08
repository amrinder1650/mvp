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
      models.players.post(req.body.name, (err, results) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.send(results);
        }
      });
    },
    delete: function (req, res) {
      models.players.delete(req.body.name, (err, results) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.send(results);
        }
      });
    }
  }
}