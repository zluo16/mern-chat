import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './user'

export class UsersList extends Component {

  render() {
    const { users } = this.props

    return (
      <div className="list">
        <div className="list-header">
          <h2>Connections</h2>
        </div>
        {users.map(user => {
          return (
            <User
              key={user._id}
              username={user.username}
              fullname={user.fullname}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export const ConnectedUsersList = connect(mapStateToProps)(UsersList)
