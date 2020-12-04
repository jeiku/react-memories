import PostMessage from "../models/postMessage.js";

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
