import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import './Form.scss';
import { createPost } from '../../actions/postsActions';

const Form = () => {
  // This is the useState hook for the Post Data, which at the start is empty. When the user fills in the inputs,
  // each property of postData is updated with setPostData
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  // This allows us to dispatch actions
  const dispatch = useDispatch();

  // When the form is submitted, this function runs sending a post request with the user data
  const handleSubmit = e => {
    // This prevents the window from reloading on submit
    e.preventDefault(); 

    // We then call 'dispatch()' which dispatches the 'createPost()' action that we've created inside '../../actions/posts.js'.
    // The data that it receives is the postData that was updated with the new property values that the user typed.
    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper>
      <form className='form' autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Typography variant='h6'>Create an Echo</Typography>
        <div className='form__inputs'>
          <TextField
            name='creator'
            variant='outlined'
            label='Creator'
            fullWidth
            value={postData.creator}
            onChange={e => setPostData({ ...postData, creator: e.target.value })}
          />
          <TextField
            name='title'
            variant='outlined'
            label='Title'
            fullWidth
            value={postData.title}
            onChange={e => setPostData({ ...postData, title: e.target.value })}
          />
          <TextField
            name='message'
            variant='outlined'
            label='Message'
            fullWidth
            value={postData.message}
            onChange={e => setPostData({ ...postData, message: e.target.value })}
          />
          <TextField
            name='tags'
            variant='outlined'
            label='Tags'
            fullWidth
            value={postData.tags}
            onChange={e => setPostData({ ...postData, tags: e.target.value })}
          />
        </div>
        <div>
          <FileBase
            className={'form__file-input'}
            type='file'
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <div className='form__buttons'>
          <Button
            className={'button-submit'}
            variant='container'
            color='primary'
            size='large'
            type='submit'
          >
            Submit
          </Button>
          <Button variant='contained' color='secondary' size='small' onClick={clear}>
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
