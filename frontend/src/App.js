import React from 'react';
import { Container } from '@mui/material';

import { Navbar } from './components';
import { Content } from './containers';
import './App.scss';

function App() {
  return (
    <Container max-width='lg'>
      <Navbar />
      <Content />
    </Container>
  );
}

export default App;
