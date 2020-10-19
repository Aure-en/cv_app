import React, { Component } from 'react'

class GeneralInfo extends Component {

  constructor(props) {
    super(props)

    const { firstName, lastName, phone, mail } = this.props.state
  
    this.state = {
       firstName: firstName,
       lastName: lastName,
       phone: phone,
       mail: mail,
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {

    const { firstName, lastName, phone, mail } = this.state

    return (
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.changeState('general', false)
          this.props.getState('general', this.state)
        }}>
          <h2>General Information</h2>

          <label htmlFor="firstName">First Name</label>
          <input type="text" value={firstName} onChange={this.handleChange} id="firstName"/>

          <label htmlFor="lastName">Last Name</label>
          <input type="text" value={lastName} onChange={this.handleChange} id="lastName"/>

          <label htmlFor="phone">Phone</label>
          <input type="tel" value={phone} onChange={this.handleChange} id="phone"/>

          <label htmlFor="mail">Mail</label>
          <input type="email" value={mail} onChange={this.handleChange} id="mail"/>

          <button type="submit">Submit</button>
        </form>
    )
  }
}

export default GeneralInfo
