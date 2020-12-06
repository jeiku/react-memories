import React from "react";
import {Grid, CircularProgress} from "@material-ui/core";
// how do we fetch th data from the global redux store? useSelector
import {useSelector} from "react-redux";

import Post from "./Post/Post.js";
import useStyles from "./styles";

const Posts = ({setCurrentId}) => {
  // callback function, have access to store, or state.. immediately return store.posts
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    // if there are 0 posts, show Circular Progress, else..
    !posts.length ? (
      <CircularProgress color='secondary' />
    ) : (
      <Grid
        className={classes.container}
        container
        alignItems='stretch'
        spacing={3}
      >
        {posts.map((post) => (
          // xs={12} how large will it be on mobile? full width(12)
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
