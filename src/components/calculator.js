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
        <Subject name="Language A" subtitle="Studies in language and literature" subjects={this.getGroup(1)} />

        <Subject name="Language B" subtitle="Language acquistion" subjects={this.getGroup(2)} />

        <Subject name="Social science" subtitle="Individuals and societies" subjects={this.getGroup(3)} />

        <Subject name="Natural science" subtitle="The sciences" subjects={this.getGroup(4)} />

        <Subject name="Mathematics" subtitle="Mathematics" subjects={this.getGroup(5)} />

        <Subject name="Art" subtitle="The arts" subjects={this.getGroup(6)} />
      </div>
    );
  }
}

export default Calculator
