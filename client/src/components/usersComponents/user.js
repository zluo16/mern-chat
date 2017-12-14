import React from 'react'

const User = ({ username, fullname }) => {
  const un = `${username}`
  const fn = `${fullname}`

  return (
    <div>
      <h3>{fn}</h3>
      <p>{un}</p>
    </div>
  )
}

export default User
