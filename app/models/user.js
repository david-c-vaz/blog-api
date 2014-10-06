var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
 
var userSchema = new mongoose.Schema({
      'name': { type: String },
      'email': {type: String ,validate: /([a-z]+@[a-z]+.co.in)|([a-z]*@[a-z]*.com)/},
      'age': { type: Number, min: 0, max: 120 },
      'adult': Boolean
  });

var User=mongoose.model('User', userSchema);

module.exports =User 