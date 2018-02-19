export default function currentUserReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_CURRENT_USER':
      return action.payload;

    case 'REMOVE_USER':
      return {};

    default:
      return state;
  }
}
