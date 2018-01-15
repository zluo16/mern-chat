import React from 'react'

const Message = ({ username, message, alignment }) => {
  const positioning = `${alignment}`

  return (
    <div className={positioning}>
      <div className="picture">
        <h3>{username}</h3>
      </div>
      <div className="message">
        <span>{username}</span>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message
