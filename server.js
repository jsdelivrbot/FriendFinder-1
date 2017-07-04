//Require express and body parser
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.port || 3000;

//BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Adding Routes
var htmlRoutes = require('./routing/htmlRoutes')(app),
    apiRoutes = require('./routing/apiRoutes');

//Tell app to use the routes
app.use('/', apiRoutes);

//Listen to Port
app.listen(port, function() {
    console.log('App listening on PORT ' + port);
});