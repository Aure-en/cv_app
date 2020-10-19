import React, { Component } from 'react'

class Education extends Component {

  constructor(props) {
    super(props)

    const { school, title, date } = this.props.state
  
    this.state = {
       school: school,
       title: title,
       date: date
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  
  render() {

    const { school, title, date } = this.state

    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.changeState('education', false)
        this.props.getState('education', this.state)
      }}>
        <h2>Education</h2>

        <label htmlFor="school">School</label>
        <input type="text" value={school} onChange={this.handleChange} id="school"/>
        
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={this.handleChange} id="title"/>

        <label htmlFor="date">Date of Study</label>
        <input type="text" value={date} onChange={this.handleChange} id="date"/>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Education
