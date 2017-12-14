export default function users(state = [
  { _id: 2, username: 'Kevin', fullname: 'Kevin Smith' },
  { _id: 3, username: 'Morty', fullname: 'Morty Smith' }
], action) {
  switch (action.type) {
    case 'ADD_USER':

      break;

    default:
      return state
  }
}
