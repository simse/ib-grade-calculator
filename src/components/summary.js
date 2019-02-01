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
    } else {
      return '#55ef7e';
    }
  }

  render() {


    return (
      <div style={{
        width: '100%',
      }}>
        <div style={{
          padding: 30,
          margin: '0 auto',
          maxWidth: 1400,
          display: 'flex',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 12,
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
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
