var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var bController = require('./bController');
var rootPath = path.normalize(__dirname + "/../");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));
app.use(express.static(rootPath + '/node_modules'));

app.post('/api/book', bController.postBook);

app.listen(9000);
console.log('Listening on port 9000');