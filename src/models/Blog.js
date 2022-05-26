const mongoose = require("mongoose");
const validator = require("validator");
const blogSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authorimg: {
    type: String,
    required: true,
  },
  authorname: {
    type: String,
    required: true,
  },
  comments: [String],
  facebook: {
    type: Number,
  },
  twitter: {
    type: Number,
  },
  linkedin: {
    type: Number,
  },
});
// New Connection
const Blog = new mongoose.model("Blogs", blogSchema);
module.exports = Blog;
