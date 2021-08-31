const mongoose = require("mongoose");
const User = require("./User");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
