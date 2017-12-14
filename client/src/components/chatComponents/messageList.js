import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './message'

export class MessageList extends Component {

  render() {
    const { messages } = this.props

    return (
      <div>
        {messages.map(message => {
          return (
            <Message
              key={message._id}
              username={message.username}
              message={message.body}
              alignment={message.alignment}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export const ConnectedMessageList = connect(mapStateToProps)(MessageList)
