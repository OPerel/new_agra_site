import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './clients.css';

const queryClients = graphql`{
  allWordpressWpMedia(filter:{caption:{regex: "/clients/"}}) {
    edges {
      node {
        id
        wordpress_id
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
}`

const Clients = () => (
  <StaticQuery query={queryClients}
    render={data => {
      const { edges } = data.allWordpressWpMedia;
      return (
        <section style={{ padding: '70px 0' }}>
          <h2 style={{ textAlign: 'center' }}>הלקוחות שלנו</h2>
          <div className="clients container">
            {
              edges.map(edge => {
                const { fluid } = edge.node.localFile.childImageSharp;
                return (
                  <div key={edge.node.wordpress_id}>
                    <Img
                    key={edge.node.id}
                    fluid={fluid}
                    className="client-img"
                    />
                  </div>
                )
              })
            }
          </div>
        </section>
      )
    }}
  />
)

export default Clients;
