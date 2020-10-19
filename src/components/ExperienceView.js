import React, { Component } from 'react'

class ExperienceView extends Component {
  render() {
    const { company, start, end, position, tasks } = this.props.state
    return (
      <div className="category">
        <button type="button" onClick={() => this.props.changeState('experience', true)}><i className="fas fa-pencil-alt"></i></button>
        <h2>Experience</h2>

        <div className="field">
          <div>Company</div>
          <div>{company}</div>
        </div>

        <div className="field">
          <div>Start Date - End Date</div>
          <div>{start} - {end}</div>
        </div>

        <div className="field">
          <div>Position</div>
          <div>{position}</div>
        </div>

        <div className="field">
          <div>Tasks</div>
          <div>{tasks}</div>
        </div>

      </div>
    )
  }
}

export default ExperienceView
