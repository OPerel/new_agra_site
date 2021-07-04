import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import PageLayout from '../components/pageLayout/pageLayout';
import PageHeader from '../components/pageHeader/pageHeader';
import BlogComponent from '../components/blogComponent';

export default ({ data }) => {
  const { fluid } = data.wordpressPage.featured_media.localFile.childImageSharp;
  return (
    <Layout pageTitle={data.wordpressPage.title}>
      <PageHeader imgFile={fluid} title={data.wordpressPage.title} />
      <PageLayout>
        <BlogComponent />
      </PageLayout>
    </Layout>
  )
}

export const pageQuery = graphql`{
    wordpressPage(slug: { eq: "blog" }) {
      id
      title
      featured_media {
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
