const mongoose = require('mongoose');
const { Schema } = mongoose;
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 21);

// Source Document
const blogSchema = new Schema({
  _id:  {
      type: String,
      default: () => nanoid(),
      },
  title:  String, 
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
});
const BlogAsDocument = mongoose.model('Blog', blogSchema);
module.exports = BlogAsDocument;
