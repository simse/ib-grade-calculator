import React from 'react'
import Select from 'react-select'

import Assessment from '../components/assessment'

class Subject extends React.Component {


  render() {
    return (
      <div className="subject">
        <div style={{
          marginBottom: 20
        }}>
          <h1 style={{
            marginBottom: 10
          }}>{this.props.name}</h1>
          <span>{this.props.subtitle}</span>
        </div>

        <div style={{
          marginBottom: 30
        }}>
          <h3>Select subject</h3>

          <Select options={this.props.subjects} />
        </div>

        <div style={{
          marginBottom: 30
        }}>
          <h3>Select level</h3>

          <Select options={this.props.levels} />
        </div>

        <div>
          <h3 style={{

          }}>Components</h3>

            <p>Please select subject and level first :)</p>
        </div>
      </div>
    )
  }
}

export default Subject
