import React from 'react'

class Summary extends React.Component {

  get backgroundColour() {
    let grade = this.props.grade;

    if(grade === 0) {
      return '#dfe6e9';
    } else if(grade < 24) {
      return '#ff7675';
    } else if(grade < 30) {
      return '#ffeaa7';
    } else if(grade < 40) {
      return '#81ecec';
    } else {
      return '#55efc4';
    }
  }

  render() {


    return (
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        background: '#fff',
        borderTop: '1px solid lightgrey'
      }}>
        <div style={{
          padding: 20,
          margin: '0 auto',
          maxWidth: 1200,
          display: 'flex'
        }}>
          <h1 style={{
            fontSize: '1.2rem',
            fontWeight: '400',
            margin: 0,
            marginRight: 30
          }}>Grade: <span style={{
            padding: 3,
            borderRadius: 5,
            background: this.backgroundColour
          }}>{this.props.grade}</span>/42</h1>

          <h1 style={{
            fontSize: '1.2rem',
            fontWeight: '400',
            margin: 0,
            marginRight: 30
          }}>HL: {this.props.hlGrades}</h1>

          <h1 style={{
            fontSize: '1.2rem',
            fontWeight: '400',
            margin: 0,
            marginRight: 30
          }}>SL: {this.props.slGrades}</h1>
        </div>
      </div>
    )

  }
}

export default Summary
