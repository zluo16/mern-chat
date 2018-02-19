import { combineReducers } from 'redux'

import messageListReducer from './MessageListReducer'
import currentUserReducer from './currentUserReducer'
import usersReducer from './UsersReducer'
import userReducer from './UserReducer'

export default combineReducers({
  currentUser: currentUserReducer,
  messages: messageListReducer,
  users: usersReducer,
  user: userReducer
})
