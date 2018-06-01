var express = require('express')
var cors = require('cors')
var app = express()
const db = require('./db.json');
app.use(cors())

app.get('/users', function (req, res, next) {
  res.json({msg: db.users})
});

app.get('/users/:userId', function (req, res, next) {
  const id = parseInt(req.params.userId);
  res.json({msg: db.users.find((user) => user.id == id)})
});

app.get('/', function (req, res, next) {
  res.json({msg: 'Ready to receive requests'});
});

app.listen(3000);

console.log('Worker started');