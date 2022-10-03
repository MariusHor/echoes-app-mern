import { combineReducers } from 'redux'; // This will help us combine more reducers intro one single export

import postsReducer from './postsReducer'

export default combineReducers({ postsReducer }) // Here we can export all the individual reducers that we have