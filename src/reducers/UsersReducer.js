export default function users(state = [
  { _id: 2, username: 'Kevin', fullname: 'Kevin Smith' },
  { _id: 3, username: 'Morty', fullname: 'Morty Smith' }
], action) {
  switch (action.type) {
    case 'UPDATE_USERS':
      return action.payload

    default:
      return state
  }
}
