var express=require('express');
var user_routes = require('./pages');
var blog_routes = require('./blogs');

var router=express.Router();
router.route('/users').get(user_routes.allUsers);
router.route('/users').post(user_routes.createUser);
router.route('/users/:id').get(user_routes.showUser);
router.route('/users/:id').put(user_routes.updateUser);
router.route('/users/:id').delete(user_routes.deleteUser);
router.route('/sign_in').post(user_routes.sign_in);
router.route('/sign_out').delete(user_routes.sign_out);

router.route('/blogs').get(blog_routes.allBlogs);
router.route('/blogs').post(blog_routes.createBlog);
router.route('/blogs/:id').get(blog_routes.showBlog);
router.route('/blogs/:id').put(blog_routes.updateBlog);
router.route('/blogs/:id').delete(blog_routes.deleteBlog);

exports.v1Router=router
