import React from "react";
// material ui
import { Grid, CircularProgress } from "@material-ui/core";
// redux
import { useSelector } from "react-redux";
// components
import Post from "./Post/Post";
// styles
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();

  console.log(posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3} >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts;