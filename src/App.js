import React, { Component } from 'react'
import Education from './components/Education';
import EducationView from './components/EducationView';
import Experience from './components/Experience';
import ExperienceView from './components/ExperienceView';
import General from './components/General';
import GeneralView from './components/GeneralView';
import Message from './components/Message';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      edit: {
       general: true,
       education: true,
       experience: true
      },
      general: {},
      education: {},
      experience: {}
    }

    this.setEditState = this.setEditState.bind(this)
    this.getComponentState = this.getComponentState.bind(this)

  }

  setEditState(component, state) {
    this.setState(prevState => {
      let edit = Object.assign({}, prevState.edit)
      edit[component] = state
      return { edit }
    })
  }

  getComponentState(component, state) {
    this.setState({
      [component] : state
    })
  }

  render() {
    const { general, education, experience } = this.state.edit
    return (
      <div className="App">
        
        <Message />

        { general ? <General changeState={this.setEditState} getState={this.getComponentState} state={this.state.general}/> : <GeneralView changeState={this.setEditState} state={this.state.general}/> }
        { education ? <Education changeState={this.setEditState} getState={this.getComponentState} state={this.state.education}/> : <EducationView changeState={this.setEditState} state={this.state.education}/> }
        { experience ? <Experience changeState={this.setEditState} getState={this.getComponentState} state={this.state.experience}/> : <ExperienceView changeState={this.setEditState} state={this.state.experience}/> }

      </div>
    );
  }
}

export default App;
