import React from 'react'
import Select from 'react-select'
import { Row, Col } from 'react-grid-system'
import { Collapse } from 'react-collapse'

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

    this.setState(state, function afterStateChange() {
      this.informGrade()
    })
  }

  changeLevel = (newLevel) => {
    let state = this.state;

    state.currentLevel = newLevel.value;

    this.setState(state, function afterStateChange() {
      this.informGrade()
    })
  }

  updateMarks = (marks) => {
    let newMark = Math.round( marks * 10 ) / 10;

    this.setState({totalMark: newMark}, function afterStateChange() {
      this.informGrade()
    });
  }

  informGrade() {
    if(this.state.currentSubject !== null && this.state.currentLevel !== null) {
      this.props.updateGrade(this.state.currentSubject.group, this.grade, this.state.currentLevel)
    }
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
    let marks = Math.round(this.state.totalMark);

    let grade = 1;
    for(let b of boundaries) {

      if(marks >= b.from && marks <= b.to) {
        return grade
      }

      grade += 1;
    }

    return 0;

  }

  get name() {
    let subject = this.state.currentSubject;
    let level = this.state.currentLevel;

    if(subject === null) {
      return this.props.name;
    } else if(level === null) {
      return subject.name;
    } else {
      return subject.name + ' – ' + level.toUpperCase();
    }
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
      <div style={{
        padding: 50,
        borderRadius: 8,
        //border: '1px solid lightgrey',
        marginBottom: 20,
        background: '#fff',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          marginBottom: 20
        }}>
          <h2 style={{
            marginBottom: 10
          }}>{this.name}</h2>
          <small>{this.props.subtitle}</small>

          <p style={{
            margin: '20px 0'
          }}>
            <span>Weighted marks: <strong>{this.state.totalMark}/100</strong></span>

            <br />

            <span>Grade: <strong>{this.grade}</strong></span>
          </p>
        </div>

        <Collapse isOpened={true}>
          <Row>
            <Col sm={6}>
              <div style={{
                marginBottom: 30
              }}>
                <h3>Select subject</h3>

                <Select onChange={this.changeSubject}
                        options={this.subjects} />
              </div>
            </Col>

            <Col sm={6}>
              <div style={{
                marginBottom: 30
              }}>
                <h3>Select level</h3>

                <Select onChange={this.changeLevel}
                        options={this.levels} />
              </div>
            </Col>
          </Row>

          <div>
            <h3 style={{

            }}>Components</h3>

            <Components components={this.assessments} updateMarks={this.updateMarks} />
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Subject
