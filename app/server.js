var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var htmlRoutes = require('./routing/htmlRoutes');
var apiRoutes = require('./routing/apiRoutes');
//var bodyParser = require('body-parser');

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var port = process.env.port || 3000;

//adding middleware
app.use('/', htmlRoutes);
app.use('/', apiRoutes);

app.listen(port, function() {
    console.log("App listening on PORT " + port);
});