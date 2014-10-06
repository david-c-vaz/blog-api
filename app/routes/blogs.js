var Blog=require('../models/blog');
var db= require('../../db/database.js');
exports.createBlog=function(req,res,next){
  var blog=new Blog({
    title: req.body.title,
    content: req.body.content
  });

  blog.save(function(err, blog) {
    if (err){
      return console.error(err);
    }else{
      res.json(blog);
    } 
  });
}

exports.showBlog=function(req,res,next){
    return Blog.findById(req.params.id,function(err,blog){
      if (err) {
        return res.json({'status': 'Cannot Find Blog','error':err });
      } else {
        return res.json(blog);
      }
    });
}


exports.updateBlog=function(req,res,next){
  return Blog.findById(req.params.id,function(err,blog){
      if (err) {
        return res.json({'status': 'Cannot Find Blog','error':err });
      } else {
        blog.title= req.body.title,
        blog.content= req.body.content,
        blog.save(function(err, blog) {
          if (err){
            return console.error(err);
          }else{
            res.json(blog);
          } 
        });
      }
    });
}

exports.deleteBlog=function(req,res,next){
  return Blog.findById(req.params.id,function(err,blog){
      if (err) {
        return res.json({'status': 'Cannot Find Blog','error':err });
      } else {
        blog.remove(function(err,blog){
          if (err) {
            return res.json({'status': 'Sorry. Blog Cannot Be deleted.'});
          } else {
            return res.json(blog);
          }
        })
      }
    });
}


exports.allBlogs=function(req,res,next){
  return Blog.find({},function(err,blogs){
      if (err) {
        return res.json({'status': err});
      } else {
        res.json(blogs);
      }
  });
}