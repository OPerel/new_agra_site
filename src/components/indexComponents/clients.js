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
              ...GatsbyImageSharpFluid
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
          <h3 style={{ textAlign: 'center' }}>הלקוחות שלנו</h3>
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
          <div className="clients-mobile">
            <div className="slide-track">
              {
                edges.map(edge => {
                  const { fluid } = edge.node.localFile.childImageSharp;
                  return (
                    <Img
                    key={edge.node.id}
                    fluid={fluid}
                    />
                  )
                })
              }
              {
                edges.map(edge => {
                  const { fluid } = edge.node.localFile.childImageSharp;
                  return (
                    <Img
                    key={edge.node.id}
                    fluid={fluid}
                    />
                  )
                })
              }
            </div>
          </div>
        </section>
      )
    }}
  />
)

export default Clients;
