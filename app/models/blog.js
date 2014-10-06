var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
 
var blogSchema = new mongoose.Schema({
      'title': { type: String },
      'content': String,
      'created_at': {type: Date, default: Date.now}
  });
 
module.exports = mongoose.model('Blog', blogSchema);