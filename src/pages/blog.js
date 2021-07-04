import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import PageLayout from '../components/pageLayout/pageLayout';
import PageHeader from '../components/pageHeader/pageHeader';
import BlogComponent from '../components/blogComponent';

const Blog = ({ data }) => {
  const { fluid } = data.contentfulPage.featuredMedia;
  return (
    <Layout pageTitle={data.contentfulPage.title}>
      <PageHeader imgFile={fluid} title={data.contentfulPage.title} />
      <PageLayout>
        <BlogComponent />
      </PageLayout>
    </Layout>
  )
}

export const pageQuery = graphql`{
    contentfulPage(slug: { eq: "blog" }) {
      id
      title
      featuredMedia {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }`

export default Blog;