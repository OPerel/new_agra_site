import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PostPrev from './postPreview/postPrev';

const postQuery = graphql`{
  allContentfulPost (sort:{fields:date, order:DESC}) {
    edges {
      node {
        id
        slug
        title
        date
        excerpt
        featuredMedia {
          fixed(width: 200, height: 100) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
}`

const BlogComponent = () => {
  const data = useStaticQuery(postQuery);
  const { edges }  = data.allContentfulPost;
  return (
    edges.map((edge) => {
      return (
        <PostPrev
          key={edge.node.id}
          slug={edge.node.slug}
          date={edge.node.date}
          title={edge.node.title}
          excerpt={edge.node.excerpt}
          img={edge.node.featuredMedia.fixed}
        />
      )
    })
  )
}

export default BlogComponent;
