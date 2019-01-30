import React from 'react';

class Assessment extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {

    this.updateMarks(event.target.value)

  }

  updateMarks(marks) {
    let component = this.props.component;

    this.props.onChange(component.id, Math.round( (marks/component.max_marks*100) / 100 * this.props.component.weight * 10 ) / 10)
  }

  render() {
    return (
      <div className="component">
        <h4 style={{
          marginBottom: 10
        }}>{this.props.component.name}</h4>

        <div style={{
          marginBottom: 40
        }}>

          <div display={{
            display: 'flex'
          }}>
            <label>
              Marks:&nbsp;&nbsp;
              <input
                type="text"
                maxLength="3"
                onChange={this.handleChange}
                style={{
                fontSize: '1rem',
                outline: '0',
                maxWidth: '50px',
                borderRadius: 6,
                border: '1px solid lightgrey'
              }} />
            </label>

            <span>/{this.props.component.max_marks}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Assessment
