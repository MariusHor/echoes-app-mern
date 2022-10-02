import React from 'react';
import { Container /* Typography, Grow, Grid*/ } from '@mui/material';

import { Navbar } from './components';
import './App.scss';

function App() {
  return (
    <Container max-width='lg'>
      <Navbar />
    </Container>
  );
}

export default App;
