import React from 'react'

class Summary extends React.Component {
  render() {


    return (
      <div>
        <p>Hooray your final grade is:</p>
        <h1 style={{
          fontSize: '5rem',
          fontWeight: '300'
        }}>{this.props.grade}/42</h1>
      </div>
    )

  }
}

export default Summary
