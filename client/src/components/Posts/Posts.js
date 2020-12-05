import React from "react";
// how do we fetch th data from the global redux store? useSelector
import {useSelector} from "react-redux";

import Post from "./Post/Post.js";
import useStyles from "./styles";

const Posts = () => {
  // callback function, have access to store, or state.. immediately return store.posts
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
