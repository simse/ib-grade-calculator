import React from 'react';

class Assessment extends React.Component {
  render() {
    return (
      <div className="component">
        <h4>{this.props.name}</h4>

        <div style={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center'
        }}>

          <div>
            <label>
              Marks: <br/>
              <input type="text" maxLength="3" style={{
                fontSize: '5.5rem',
                outline: '0',
                maxWidth: '150px',
                borderRadius: 6,
                border: '1px solid lightgrey'
              }} />
            </label>
          </div>

          <div style={{
            padding: '0 20px',
            fontSize: '4rem',
            opacity: 0.2
          }}>
            <span>=</span>
          </div>

          <div>
            <label>
              Grade: <br/>
              <input type="text" maxLength="1" style={{
                fontSize: '5.5rem',
                outline: '0',
                maxWidth: '150px',
                borderRadius: 6,
                border: '1px solid lightgrey'
              }} />
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default Assessment
