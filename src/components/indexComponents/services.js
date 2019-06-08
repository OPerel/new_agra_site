import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import ServiceExcerpt from './serviceExcerpt';
import './services.css'

const serviceQuery = graphql`{
  allWordpressPage (filter:{template:{eq:"services.php"}}) {
    edges {
      node {
        id
        slug
        title
        excerpt
        acf {
          icon {
            localFile {
              childImageSharp {
                fixed(width: 120, height: 120) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
}`

const Services = (props) => {
  return (
    <StaticQuery query={serviceQuery}
      render={data => {
        const { edges } = data.allWordpressPage;
        return (
          <section style={{ backgroundColor: '#f8f9f9', padding: '70px 0' }}>
          <h2 style={{ textAlign: 'center' }}>שירותים</h2>
            <div className="services container">
              {
                edges.map(edge => {
                  return (
                    <Link
                    key={edge.node.id}
                    to={`/${edge.node.slug}`}
                    >
                      <ServiceExcerpt page={edge.node} />
                    </Link>
                  )
                })
              }
            </div>
          </section>
        )
      }}
    />
  )
}

export default Services;