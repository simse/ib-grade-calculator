import React from 'react'
import Select from 'react-select'

import Components from '../components/components'

class Subject extends React.Component {
  state = {
    currentSubject: null,
    currentLevel: null,
    totalMark: 0,
    grade: null
  }

  changeSubject = (currentSubject) => {
    let state = this.state;

    state.currentSubject = this.search(currentSubject.value)

    this.setState(state)
  }

  changeLevel = (newLevel) => {
    let state = this.state;

    state.currentLevel = newLevel.value;

    this.setState(state)
  }

  updateMarks = (marks) => {
    this.setState({totalMark: marks});
  }

  search(id) {
    for(let s of this.props.subjects) {
      if(s.id === id) {
        return s
      }
    }
  }

  get grade() {

    if(this.state.currentSubject === null || this.state.currentLevel === null) {
      return 0;
    }

    let boundaries = this.state.currentSubject.boundaries[this.state.currentLevel];
    let marks = this.state.totalMark;

    let grade = 1;
    for(let b of boundaries) {

      if(marks >= b.from && marks <= b.to) {
        return grade
      }

      grade += 1;
    }

    return 0;

  }

  get subjects() {
    let subjects = []

    for(let s of this.props.subjects) {
      subjects.push({value: s.id, label: s.name})
    }

    return subjects
  }

  get levels() {
    let levels = []

    if(this.state.currentSubject === null) {
      return []
    }

    for(let level of this.state.currentSubject.levels) {
      levels.push({value: level, label: level.toUpperCase()})
    }

    return levels
  }

  get assessments() {
    if(this.state.currentSubject === null || this.state.currentLevel === null) {
      return null
    }

    return this.state.currentSubject.assessments[this.state.currentLevel];

  }

  render() {

    return (
      <div className="subject">
        <div style={{
          marginBottom: 20
        }}>
          <h1 style={{
            marginBottom: 10
          }}>{this.props.name}</h1>
          <span>{this.props.subtitle}</span>

          <p>
            <strong>{this.state.totalMark}/100 marks</strong>

            <br />

            <em>Grade: {this.grade}</em>
          </p>
        </div>

        <div style={{
          marginBottom: 30
        }}>
          <h3>Select subject</h3>

          <Select onChange={this.changeSubject}
                  options={this.subjects} />
        </div>

        <div style={{
          marginBottom: 30
        }}>
          <h3>Select level</h3>

          <Select onChange={this.changeLevel}
                  options={this.levels} />
        </div>

        <div>
          <h3 style={{

          }}>Components</h3>

          <Components components={this.assessments} updateMarks={this.updateMarks} />
        </div>
      </div>
    )
  }
}

export default Subject
