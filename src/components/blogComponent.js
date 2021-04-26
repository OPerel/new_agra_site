import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PostPrev from './postPrev';

const postQuery = graphql`{
  allWordpressPost (sort:{fields:date, order:DESC}) {
    edges {
      node {
        id
        slug
        title
        date
        excerpt
        author {
          name
        }
        featured_media {
          localFile {
            childImageSharp {
              fixed(width: 200, height: 100) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
}`

const BlogComponent = () => (
  <StaticQuery
    query={postQuery}
    render={data => {
      const { edges }  = data.allWordpressPost;
      return (
        edges.map((edge, i) => {
          return (
            <PostPrev
              key={edge.node.id}
              slug={edge.node.slug}
              author={edge.node.author.name}
              date={edge.node.date}
              title={edge.node.title}
              excerpt={edge.node.excerpt}
              img={edge.node.featured_media}
            />
          )
        })
      )
    }}
  />
)

export default BlogComponent;
