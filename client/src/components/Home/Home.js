import React, { useState, useEffect } from 'react';
// redux
import { useDispatch } from "react-redux";
// actions
import { getPosts } from "../../actions/posts";
// material ui
import { Container, Grow, Grid } from "@material-ui/core";
// posts
import Posts from '../Posts/Posts';
// form
import Form from '../Form/Form';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home;