import React, { Component } from 'react'

class EducationView extends Component {

  render() {
    const { school, title, date } = this.props.state
    return (
      <div className="category">
        <button type="button" onClick={() => this.props.changeState('education', true)}><i className="fas fa-pencil-alt"></i></button>
        <h2>Education</h2>

        <div className="field">
          <div>School</div>
          <div>{school}</div>
        </div>

        <div className="field">
          <div>Title</div>
          <div>{title}</div>
        </div>

        <div className="field">
          <div>Date</div>
          <div>{date}</div>
        </div>
        
      </div>
    )
  }
}

export default EducationView
