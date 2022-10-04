import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/postsActions';
import { Navbar } from './components';
import { Content } from './containers';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container max-width='lg'>
      <Navbar />
      <Content />
    </Container>
  );
}

export default App;
