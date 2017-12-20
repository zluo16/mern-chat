import React, { Component } from 'react'

export default class User extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected: ''
    }
  }

  onMouseOver = () => {
    this.setState({ selected: 'highlighted' })
  }

  onMouseOff = () => {
    this.setState({ selected: '' })
  }

  onSelect = () => {
    this.setState({ selected: 'highlighted' })
  }

  render() {
    const { username, fullname } = this.props

    const un = `${username}`
    const fn = `${fullname}`

    return (
      <div
        className={this.state.selected}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOff}>
        <img src='./user-placeholder.jpg' />
        <div className='username'>
          <h3>{fn}</h3>
          <p>{un}</p>
        </div>
      </div>
    )
  }
}
