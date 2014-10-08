var express = require('express');

exports.authenticator= function(req,res,next){  
  // var path=req.path;
  // if (path.substring(path.lastIndexOf("/"))==='/sign_in' || req.session.email){
  // 	console.log('valid');
  // 	console.log(req.session.email);
  	next();	
  // }else{
  // 	console.log('in valid');
  // 	next('Not Authorised');	
  // }
}
