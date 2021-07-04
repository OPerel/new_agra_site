import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import ServiceExcerpt from '../serviceExcerpt/serviceExcerpt';
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

const Services = () => {
  return (
    <StaticQuery query={serviceQuery}
      render={data => {
        const { edges } = data.allWordpressPage;
        return (
          <section style={{ backgroundColor: '#f8f9f9', padding: '70px 0' }}>
            <h3 id="services" style={{ textAlign: 'center' }}>שירותים</h3>
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
