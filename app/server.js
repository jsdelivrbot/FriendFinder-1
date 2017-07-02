var express = require('express');
var app = express();
var htmlRoutes = require('./routing/htmlRoutes');
var apiRoutes = require('./routing/apiRoutes');

app.use(express.static('public'));
var port = process.env.port || 3000;

//adding middleware
app.use('/', htmlRoutes);
app.use('/', apiRoutes);

app.listen(port, function() {
    console.log("App listening on PORT " + port);

});