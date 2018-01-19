export default class AuthAdapter {
  static login(loginParams) {
    return fetch('/api/login', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => {
      console.log(res);
      debugger
      res.json()
    })
  }

  static signup(signupParams) {
    return fetch('/api/signup', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(signupParams)
    }).then(res => res.json())
  }

  static test() {
    return fetch('/api/users').then(res => res.json())
      .then(res => {
        debugger
      })
  }
}

function headers() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}

// function apiUrl() {
//   return 'http://localhost:8000'
// }
