var express=require('express');
var pages = require('./pages');

var router=express.Router();
router.route('/new').post(pages.createUser);

exports.router=router
