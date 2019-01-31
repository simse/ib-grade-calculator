import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      margin: `1.45rem 0 1.45rem`,
    }}
  >
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{
        margin: 0,
        fontWeight: '300',
        fontSize: '3rem',
        textAlign: 'center'
      }}>
        <Link
          to="/"
          style={{
            color: '#000',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
