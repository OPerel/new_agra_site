import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './clients.css';

const queryClients = graphql`{
  allContentfulAsset(filter:{description:{regex: "/clients/"}}) {
    edges {
      node {
        id
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
}`

const Clients = () => {
  const data = useStaticQuery(queryClients);
  const { edges } = data.allContentfulAsset;
  return (
    <section style={{ padding: '70px 0' }}>
      <h3 style={{ textAlign: 'center' }}>הלקוחות שלנו</h3>
      <div className="clients container">
        {
          edges.map(edge => {
            const { fluid } = edge.node;
            return (
              <div key={edge.node.id}>
                <Img
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
              const { fluid } = edge.node;
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
              const { fluid } = edge.node;
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
}

export default Clients;
