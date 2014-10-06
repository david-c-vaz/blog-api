var express = require('express');
var url=require('url')

exports.urlLoader= function(req,res,next){  
  req.custom_path= url.parse(req.url).pathname;
  req.queryString= url.parse(req.url).query;
  next();
}
