import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import PageLayout from '../components/pageLayout';
import Img from 'gatsby-image';
import PostInfo from '../components/postInfo';
import './post.css';

export default ({ pageContext, data }) => {
  const { featured_media } = data.wordpressPost;
  return (
    <Layout pageTitle={pageContext.title}>
      <PageLayout>
        <h1
        className="post-heading"
        dangerouslySetInnerHTML={{ __html: pageContext.title }}
        ></h1>
        <PostInfo author={pageContext.author.name} date={pageContext.date} />
        {
          featured_media ?
          <Img
          fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid}
          className="post-image"
          /> :
          null
        }
        {
          featured_media && featured_media.caption ?
          <p
          className="img-caption"
          dangerouslySetInnerHTML={{ __html: featured_media.caption }}></p> :
          null
        }
        <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: pageContext.content }}
        ></div>
      </PageLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      featured_media {
        caption
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`
