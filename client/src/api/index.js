import axios from "axios";

const url = "http://localhost:5000/posts";

// all actions towards our backend are done with redux
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
