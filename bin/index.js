var express = require('express');
var bodyParser = require('body-parser');
var request_handler=require('../app/routes/request_handler');
var middleware=require('../app/middleware/middleware');

var app = express();

app.use( bodyParser.json() );    
app.use( bodyParser.urlencoded() );

app.use(middleware.urlLoader);
app.use('/api',request_handler.router);

var server=app.listen(3000,function(){
  console.log('This application uses port %d', server.address().port)
});
