import mongoose from "mongoose";

// creates uniformity
// each post needs these things
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// create the model
const PostMessage = mongoose.model("PostMessage", postSchema);
// based on this model, later we will be able to do CRUD commands

export default PostMessage;
