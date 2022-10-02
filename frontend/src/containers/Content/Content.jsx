import React from 'react';
import { Container, Grid, Grow } from '@mui/material';

import { Posts, Form } from '../../components';
import './Content.scss'

const Content = () => {
  return (
    <Grow in>
      <Container>
        <Grid container justify='space-between' alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={6} lg={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={6} lg={5}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Content;
