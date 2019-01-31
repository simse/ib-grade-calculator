import React from 'react';

import Subject from '../components/subject'
import Summary from '../components/summary'


class Calculator extends React.Component {
  constructor( props ){
    super( props );
    this.updateGrade = this.updateGrade.bind(this);
  }

  state = {
    grades: {}
  }

  updateGrade(group, grade, level) {
    let grades = this.state.grades;

    grades[group] = {grade: grade, level: level};

    this.setState({grades: grades})
  }

  getGroup(group) {

    let subjects = this.props.subjects;
    let group_subjects = [];

    for (let subject of subjects) {
      if(subject.node.group === group) {
        group_subjects.push(subject.node)
      }
    }

    return group_subjects
  }

  get totalGrade() {
    let totalGrade = 0;

    for(let group in this.state.grades) {
      totalGrade += this.state.grades[group].grade;
    }

    return totalGrade;
  }

  get hlGrades() {
    let grades = this.state.grades;
    let hlGrades = '';

    Object.entries(grades).forEach(function(key, value) {
        if(key[1].level === 'hl') {
          hlGrades += key[1].grade
        }
      }
    );

    if(hlGrades.length < 3) {
      hlGrades += '0'.repeat(3 - hlGrades.length)
    }

    return hlGrades;
  }

  get slGrades() {
    let grades = this.state.grades;
    let slGrades = '';

    Object.entries(grades).forEach(function(key, value) {
        if(key[1].level === 'sl') {
          slGrades += key[1].grade
        }
      }
    );

    if(slGrades.length < 3) {
      slGrades += '0'.repeat(3 - slGrades.length)
    }

    return slGrades;
  }

  render() {
    return (
      <div style={{
        paddingBottom: 80
      }}>
        <Subject
          name="Group 1"
          subtitle="Studies in language and literature"
          subjects={this.getGroup(1)}
          updateGrade={this.updateGrade} />

        <Subject
          name="Group 2"
          subtitle="Language acquistion"
          subjects={this.getGroup(2)}
          updateGrade={this.updateGrade} />

        <Subject
          name="Group 3"
          subtitle="Individuals and societies"
          subjects={this.getGroup(3)}
          updateGrade={this.updateGrade} />

        <Subject
          name="Group 4"
          subtitle="The sciences"
          subjects={this.getGroup(4)}
          updateGrade={this.updateGrade} />

        <Subject
          name="Group 5"
          subtitle="Mathematics"
          subjects={this.getGroup(5)}
          updateGrade={this.updateGrade} />

        <Subject
          name="Group 6"
          subtitle="The arts"
          subjects={this.getGroup(6)}
          updateGrade={this.updateGrade} />

        <Summary grade={this.totalGrade} hlGrades={this.hlGrades} slGrades={this.slGrades} />
      </div>
    );
  }
}

export default Calculator
