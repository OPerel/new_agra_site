import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageLayout from '../components/pageLayout';
import PageHeader from '../components/pageHeader';
import BlogComponent from '../components/blogComponent';

export default ({ data }) => {
  const img = data.wordpressPage.featured_media.localFile.childImageSharp.fluid;
  return (
    <Layout>
      <PageHeader imgFile={img} title={data.wordpressPage.title} />
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }`
