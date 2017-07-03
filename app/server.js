//Require express and body parser
var express = require('express');
var bodyParser = require('body-parser');

//Tell app to use express
var app = express();

//BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Create a port variable to use dynamic port 
var port = process.env.port || 3000;

//Adding Routes
var htmlRoutes = require('./routing/htmlRoutes')(app);
var apiRoutes = require('./routing/apiRoutes');

//Tell app to use the routes
app.use('/', apiRoutes);

//Listen to Port
app.listen(port, function() {
    console.log("App listening on PORT " + port);
});