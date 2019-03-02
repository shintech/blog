import { combineReducers } from 'redux'
import trees from './trees'
import posts from './posts'
import post from './post'
import users from './users'

export default combineReducers({
  trees,
  posts,
  post,
  users
})
