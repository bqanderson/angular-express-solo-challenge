var express = require('express');
var index = require('./routes/index');

var app = express();

// Static files
app.use(express.static('public'));

// Routers
app.use('/', index);

var server = app.listen(process.env.PORT || 3100, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
