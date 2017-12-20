import React, { Component } from 'react'
import { connect } from 'react-redux'

export class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { _id, username, fullname } = this.props.user

    return (
      <div className='profile-wrapper'>
        <div className='profile-header'>
          <h2>Profile</h2>
        </div>
        <img src='./user-placeholder.jpg' />
        <h1>{fullname}</h1>
        <p>{username}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export const ConnectedUserProfile = connect(mapStateToProps)(UserProfile)
