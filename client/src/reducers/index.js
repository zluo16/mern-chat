import { combineReducers } from 'redux'

import messageListReducer from './MessageListReducer'
import usersReducer from './UsersReducer'

export default combineReducers({
  messages: messageListReducer,
  users: usersReducer
})
