import React, { Component } from 'react'

class GeneralInfoView extends Component {

  render() {
    const { firstName, lastName, phone, mail} = this.props.state
    return (
      <div className="category">
        <button type="button" onClick={() => this.props.changeState('general', true)}><i className="fas fa-pencil-alt"></i></button>
        <h2>{firstName} {lastName}</h2>

        <div className="field">
          <div>Phone Number</div>
          <div>{phone}</div>
        </div>

        <div className="field">
          <div>Email</div>
          <div>{mail}</div>
        </div>

      </div>
    )
  }
}

export default GeneralInfoView
