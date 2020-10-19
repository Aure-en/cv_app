import React, { Component } from 'react'

class Experience extends Component {

  constructor(props) {
    super(props)

    const { company, start, end, position, tasks } = this.props.state
  
    this.state = {
       company: company,
       start: start,
       end: end,
       position: position,
       tasks: tasks
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {

    const { company, start, end, position, tasks } = this.state

    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.changeState('experience', false)
        this.props.getState('experience', this.state)
      }}>
        <h2>Experience</h2>

        <label htmlFor="company">Company</label>
        <input type="text" value={company} onChange={this.handleChange} id="company"/>

        <label htmlFor="start">Start Date</label>
        <input type="text" value={start} onChange={this.handleChange} id="start"/>

        <label htmlFor="end">End Date</label>
        <input type="text" value={end} onChange={this.handleChange} id="end"/>

        <label htmlFor="position">Position</label>
        <input type="text" value={position} onChange={this.handleChange} id="position"/>

        <label htmlFor="tasks">Tasks</label>
        <input type="text" value={tasks} onChange={this.handleChange} id="tasks"/>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Experience
