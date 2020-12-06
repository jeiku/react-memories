import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    // find something inside of a model
    // finding takes time, asynchronous, so async/await
    const postMessages = await PostMessage.find();

    // return OK status and array of all messages
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  // pass in values we received from user in req.body
  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const updatePost = async (req, res) => {
  // renaming id to _id
  const {id: _id} = req.params;
  const post = req.body;

  // is _id a valid mongoose ObjectId? if not...
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  // this is asynchronous, so await.. this is where its updated in MongoDB
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};
