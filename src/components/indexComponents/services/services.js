import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ServiceExcerpt from '../serviceExcerpt/serviceExcerpt';
import './services.css';

const query = graphql`{
  allContentfulPage(filter: {excerpt: {ne: null}}) {
    edges {
      node {
        id
        slug
        title
        excerpt
        excerptIcon {
          fixed(height: 120, width: 120) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
}`

const Services = () => {
  const excerpts = useStaticQuery(query);
  const { edges } = excerpts.allContentfulPage;
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
}

export default Services;
