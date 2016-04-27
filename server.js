// dependencies

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// mongoose init

mongoose.connect('mongodb://localhost/birds-mongoose');

mongoose.connection.once('open', function () {
  console.log("Connected to MongoDB");
});

var Sighting = require('./Sighting');

// app init

var app = express();
app.use(bodyParser.json());

var port = 3000;

// server methods

app.post('/api/sighting', function(req, res) {
  console.log('POST sighting');

  var sighting = new Sighting(req.body);
  sighting.save(function (err, s) {
    return err ? res.status(500).send(err) : res.send(s);
  });
});

app.get('/api/sighting', function(req, res) {
  console.log('GET sighting');
  res.end();
});

app.delete('/api/sighting', function(req, res) {
  console.log('DELETE sighting');
  res.end();
});

app.put('/api/sighting', function(req, res) {
  console.log('PUT sighting');
  res.end();
});

// listen

app.listen(port, function() {
  console.log("Started server on port", port);
});
