var express=require('express');
var pages = require('./pages');

var router=express.Router();
router.route('/users').get(pages.allUsers);
router.route('/users').post(pages.createUser);
router.route('/users/:id').get(pages.showUser);
router.route('/users/:id').put(pages.updateUser);
router.route('/users/:id').delete(pages.deleteUser);
exports.router=router
