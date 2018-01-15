import { combineReducers } from 'redux'

import messageListReducer from './MessageListReducer'
import usersReducer from './UsersReducer'
import userReducer from './UserReducer'

export default combineReducers({
  messages: messageListReducer,
  users: usersReducer,
  user: userReducer
})
