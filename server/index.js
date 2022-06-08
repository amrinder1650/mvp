var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

var port = 3000;

app.listen(port, function(){
  console.log('Server started and listening on port 3000');
});