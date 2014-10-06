var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
 
var userSchema = new mongoose.Schema({
      'name': { type: String },
      'email': String,
      'age': Number,
      'adult': Boolean
  });
 
module.exports = mongoose.model('User', userSchema);