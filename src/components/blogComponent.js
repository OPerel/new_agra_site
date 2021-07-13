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
          gatsbyImageData (
            height: 100,
            width: 200,
            formats: [AUTO, WEBP],
            placeholder: BLURRED
          )
        }
      }
    }
  }
}`

const BlogComponent = () => {
  const data = useStaticQuery(postQuery);
  const { edges } = data.allContentfulPost;
  return (
    edges.map((edge) => {
      return (
        <PostPrev
          key={edge.node.id}
          slug={edge.node.slug}
          date={edge.node.date}
          title={edge.node.title}
          excerpt={edge.node.excerpt}
          img={edge.node.featuredMedia}
        />
      )
    })
  )
}

export default BlogComponent;
