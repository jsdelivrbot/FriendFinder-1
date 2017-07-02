var express = require('express');
var app = express();
var htmlRoutes = require('./routing/htmlRoutes');
app.use(express.static('public'));
var port = process.env.port || 3000;

app.use('/', htmlRoutes);

app.listen(port, function() {
    console.log("App listening on PORT " + port);

});