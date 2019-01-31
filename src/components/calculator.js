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

  updateGrade(group, grade) {
    let grades = this.state.grades;

    grades[group] = grade;

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

    for(let grade in this.state.grades) {
      totalGrade += this.state.grades[grade];
    }

    return totalGrade;
  }

  render() {
    return (
      <div>
        <Subject
          name="Language A"
          subtitle="Studies in language and literature"
          subjects={this.getGroup(1)}
          updateGrade={this.updateGrade} />

        <Subject
          name="Language B"
          subtitle="Language acquistion"
          subjects={this.getGroup(2)}
          updateGrade={this.updateGrade} />

        <Subject
          name="Social science"
          subtitle="Individuals and societies"
          subjects={this.getGroup(3)}
          updateGrade={this.updateGrade} />

        <Subject
          name="Natural science"
          subtitle="The sciences"
          subjects={this.getGroup(4)}
          updateGrade={this.updateGrade} />

        <Subject
          name="Mathematics"
          subtitle="Mathematics"
          subjects={this.getGroup(5)}
          updateGrade={this.updateGrade} />

        <Subject
          name="Art"
          subtitle="The arts"
          subjects={this.getGroup(6)}
          updateGrade={this.updateGrade} />

        <Summary grade={this.totalGrade} />
      </div>
    );
  }
}

export default Calculator
