import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './clients.css';
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const queryClients = graphql`{
  allContentfulAsset(filter:{description:{regex: "/clients/"}}) {
    edges {
      node {
        id
        title
        gatsbyImageData (
          height: 120,
          width: 120,
          formats: [AUTO],
          placeholder: BLURRED
        )
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
            const img = getImage(edge.node);
            return (
              <div key={edge.node.id}>
                <GatsbyImage
                  image={img}
                  alt={edge.node.title}
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
              const img = getImage(edge.node);
              return (
                <GatsbyImage
                  key={edge.node.id}
                  image={img}
                  alt={edge.node.title}
                  className="client-img"
                />
              )
            })
          }
          {
            edges.map(edge => {
              const img = getImage(edge.node);
              return (
                <GatsbyImage
                  key={edge.node.id}
                  image={img}
                  alt={edge.node.title}
                  className="client-img"
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
