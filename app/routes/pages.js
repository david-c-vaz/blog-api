var User=require('../models/user');
exports.createUser=function(req,res,next){
  var user=new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    adult: req.body.adult
  });

  user.save(function(err, user) {
    if (err){
      return res.json(err.errors);
    }else{
      res.json(user);
    } 
  });
}

exports.showUser=function(req,res,next){
    return User.findById(req.params.id,function(err,user){
      if (err) {
        return res.json({'status': 'Cannot Find User','error':err });
      } else {
        return res.json(user);
      }
    });
}


exports.updateUser=function(req,res,next){
  return User.findById(req.params.id,function(err,user){
      if (err) {
        return res.json({'status': 'Cannot Find User','error':err });
      } else {
        user.name= req.body.name;
        user.email= req.body.email;
        user.age= req.body.age;
        user.adult= req.body.adult;
        user.save(function(err, user) {
          if (err){
            return res.json(err.errors);
          }else{
            res.json(user);
          } 
        });
      }
    });
}

exports.deleteUser=function(req,res,next){
  return User.findById(req.params.id,function(err,user){
      if (err) {
        return res.json({'status': 'Cannot Find User','error':err });
      } else {
        user.remove(function(err,user){
          if (err) {
            return res.json({'status': 'Sorry. User Cannot Be deleted.'});
          } else {
            return res.json(user);
          }
        })
      }
    });
}


exports.allUsers=function(req,res,next){
  return User.find({},function(err,users){
      if (err) {
        return res.json({'status': err});
      } else {
        res.json(users);
      }
  });
}
