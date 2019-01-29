import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Subject from '../components/subject'


class Calculator extends React.Component {
  render() {
    return (
      <div>
        <Subject name="Language A" subtitle="Language A: Literature" subjects={
          [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]
        } />
      </div>
    );
  }
}

export default Calculator
