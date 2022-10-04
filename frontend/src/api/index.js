// Imports
import axios from 'axios'; // Will be used to make API calls

// Variable containting the url that points to our backend
const url = 'http://localhost:8000/posts'; // Consists of the Port that we have set up (8000) and the '/posts' address that we have specified in the API Endpoints section of server.js

// Actions pointing towards our backend
export const addPost = newPost => axios.post(url, newPost);
export const fetchPosts = () => axios.get(url);
