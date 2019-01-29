import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Calculator from '../components/calculator'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>To calculate your grade, please choose your subjects, and enter your marks</h2>
    <p style={{
      marginBottom: '50px'
    }}><em>Using May 2017 grade boundaries, use ONLY for reference</em></p>

    <Calculator />
  </Layout>
)

export default IndexPage
