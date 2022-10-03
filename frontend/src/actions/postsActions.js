import * as api from '../api/index.js'; // We do this so that we can use: api.fetchPosts(), api.addPost()

// Action Creators - Functions that return actions, an object that has a type and a payload
export const getPosts = () => async dispatch => {
  try {
    // we get all the data from the API. Therefore it is an asynchronous function and we use await. 
    // We are basically getting a response from the api and we destructure it, getting the data object from it: { data }
    const { data } = await api.fetchPosts(); 
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  } 
};
export const createPost = post => async dispatch => {
  try {
    const { data } = await api.addPost(post);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
