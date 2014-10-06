var mongoose   = require('mongoose');

exports.createUser=function(req,res,next){
  /*var user=new User();
  user.name=req.body.name
  user.save(function(err){
    if (err)
      res.send(err);
    else
      res.json({message: 'User Created'});
  });  
  */
  res.json({message: 'User Created'});
}
