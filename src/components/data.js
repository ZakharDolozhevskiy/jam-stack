import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const query = graphql`
{
  allContentfulArticle {
    edges {
      node {
        title
        text {
          text
        }
      }
    }
  }

  contentfulPerson {
    fullName
  }
}`

export default function() {
    return <Layout>
        <StaticQuery
            query={query}
            render={({ allContentfulArticle, contentfulPerson }) => (
                <React.Fragment>
                    {allContentfulArticle.edges.map(
                        ({node}, idx) => <strong key={idx}>{node.title}</strong>
                    )}
                    <em>{contentfulPerson.fullName}</em>
                </React.Fragment>
            )}
        />
    </Layout>
}