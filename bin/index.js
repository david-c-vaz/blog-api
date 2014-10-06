var express = require('express');
var bodyParser = require('body-parser');
var request_handler=require('../app/routes/request_handler');
var middleware=require('../app/middleware/middleware');
var db= require('../db/database.js');

var app = express();

app.use( bodyParser.json() );    
app.use( bodyParser.urlencoded() );

app.use(middleware.urlLoader);
app.use('/api/v1',request_handler.v1Router);

mode=(process.argv[2] ? process.argv[2] : "-d");

switch(mode){
	case '-qa':{
	    app.use(function(err, req, res, next) {
	        res.status(err.status || 500);
	        res.render('error', {
	            message: err.message,
	            error: err
	        });
	    });
	    console.log("App is running in QA Environment");
	};break;
	case '-p':{
	    app.use(function(err, req, res, next) {
    		res.status(err.status || 500);
    		res.render('error', {
        		message: err.message,
        		error: {}
    		});
		});
		console.log("App is running in Production Environment");
	};break;
	default :{
	    app.use(function(err, req, res, next) {
	        res.status(err.status || 500);
	        res.render('error', {
	            message: err.message,
	            error: err
	        });
	    });
	    console.log("App is running in Development Environment");
	};break;
}

var server=app.listen(3000,function(){
  console.log('This application uses port %d', server.address().port)
});