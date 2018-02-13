export default function authReducer(state = {
  currentUser: {},
  errors: []
}, action) {
  switch (action.type) {
    case 'LOGGING_IN':
      return {
        ...state,
        currentUser: {
          id: action.payload.id,
          username: action.payload.username,
          fullname: `${action.payload.firstName} ${action.payload.lastName}`
        }
      };

    case 'LOGIN_FAILED':
      return {
        ...state,
        errors: []
      };

    case 'LOGOUT_USER':
      return {
        currentUser: {},
        errors: []
      };

    default:
      return state
  }
}
