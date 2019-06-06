import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import PageLayout from '../components/pageLayout';
import Img from 'gatsby-image';

export default ({ pageContext, data }) => {
  return (
    <Layout>
      <PageLayout>
        <h1>{pageContext.title}</h1>
        <Img
        fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid}
        style={{ margin: '20px 0' }}
        />
        <p dangerouslySetInnerHTML={{ __html: pageContext.content }}></p>
      </PageLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      slug
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }`
