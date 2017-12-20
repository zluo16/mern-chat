export default function user(state = {
  _id: 2, username: 'Kevin', fullname: 'Kevin Smith'
}, action) {
  switch (action.type) {
    case 'LOAD_USER':

      break;

    default:
      return state
  }
}
