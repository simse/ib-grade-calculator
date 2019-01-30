import React from 'react';

import Subject from '../components/subject'


class Calculator extends React.Component {

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

  render() {
    return (
      <div>
        <Subject name="Language A" subtitle="Language A: Literature" subjects={this.getGroup(1)} />
      </div>
    );
  }
}

export default Calculator
