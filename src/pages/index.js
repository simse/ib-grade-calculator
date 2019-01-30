import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Calculator from '../components/calculator'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>To calculate your grade, please choose your subjects, and enter your marks</h2>
    <p style={{
      marginBottom: '50px'
    }}><em>Using May 2017 grade boundaries, use ONLY for reference</em></p>

    <Calculator subjects={data.allMay2017Json.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allMay2017Json {
    edges {
      node {
        id,
        name,
        desc,
        group,
        levels,
        boundaries {
        	sl {
            from,
            to
          },
          hl {
            from,
            to
          }
      	},
        assessments {
          sl {
            id,
            name,
            weight,
            max_marks
          },
          hl {
            id,
            name,
            weight,
            max_marks
          }
        }
      }
    }
  }
}
`
