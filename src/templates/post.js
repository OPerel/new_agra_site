import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import PageLayout from '../components/pageLayout';
import Img from 'gatsby-image';
import PostInfo from '../components/postInfo';
import './post.css';

export default ({ pageContext, data }) => {
  return (
    <Layout>
      <PageLayout>
        <h1 className="post-heading">{pageContext.title}</h1>
        <PostInfo author={pageContext.author.name} date={pageContext.date} />
        {
          data.wordpressPost.featured_media ?
          <Img
          fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid}
          className="post-image"
          /> :
          null
        }
        <p
        className="post-content"
        dangerouslySetInnerHTML={{ __html: pageContext.content }}
        ></p>
      </PageLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }`
