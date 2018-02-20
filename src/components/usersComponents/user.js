import React, { Component } from 'react'
import io from 'socket.io-client'

const socketUrl = `http://localhost:${process.env.SOCKET_PORT}`
const socket = io.connect(socketUrl);

export default class User extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected: ''
    }
  }

  onSelect = () => {
    this.setState({ selected: 'highlighted' })
  }

  onClickUser = () => {
    socket.emit('enter', this.props.username);
  }

  render() {
    const { username, fullname } = this.props

    const un = `${username}`
    const fn = `${fullname}`

    return (
      <div
        name={un}
        className={this.state.selected}
        onClick={this.onClickUser.bind(this)}>
        <img src='./user-placeholder.jpg' />
        <div className='username'>
          <h3>{fn}</h3>
          <p>{un}</p>
        </div>
      </div>
    )
  }
}
