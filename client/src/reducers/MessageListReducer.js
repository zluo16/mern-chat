export default function massageList(state = [
  { _id: 1, _userId: 2, username: 'Kevin', body: 'Hey Mike! How you doin?', alignment: 'message-box left-img' },
  { _id: 2, _userId: 1, username: 'Mike', body: 'Nuthin Much Man! How are you?', alignment: 'message-box right-img' }
], action) {
  switch (action.type) {
    case 'SEND_MESSAGE':

      break;

    default:
      return state
  }
}
