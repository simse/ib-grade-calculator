import React from 'react'
import { Row, Col } from 'react-grid-system'

import Assessment from '../components/assessment'

class Components extends React.Component {

  constructor( props ){
    super( props );
    this.updateMark = this.updateMark.bind(this);
    this.informMarks = this.informMarks.bind(this);
  }

  state = {
    assessments: {}
  }

  updateMark(id, mark) {
    let assessments = this.state.assessments
    assessments[id] = mark

    this.setState({assessments: assessments})

    this.informMarks()
  }

  informMarks() {
    let totalMark = 0;

    for (const mark of Object.values(this.state.assessments)) {
      totalMark += mark;
    }

    this.props.updateMarks(totalMark)
  }

  render() {
    let message;

    if(this.props.components === null) {
      message = <p>Please select your subject and level :)</p>;
    } else {
      let a = [];

      for(let c of this.props.components) {
        a.push(
          <Col sm={4} key={c.id}>
            <Assessment component={c} onChange={this.updateMark} />
          </Col>
        )
      }

      message = a;
    }

    return (
      <Row>
        {message}
      </Row>
    )
  }
}

export default Components
