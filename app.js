const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./api');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/', api);
app.listen(5000, () => {
  console.log('App Started');
});
