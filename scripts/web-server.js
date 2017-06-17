var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + "/../");

app.use(express.static(rootPath + '/app'));
app.use(express.static(rootPath + '/node_modules'));


app.listen(9000);
console.log('Listening on port 9000');