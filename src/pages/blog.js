import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import PageLayout from '../components/pageLayout/pageLayout';
import PageHeader from '../components/pageHeader/pageHeader';
import BlogComponent from '../components/blogComponent';
import { getImage } from "gatsby-plugin-image"

const Blog = ({ data }) => {
  const img = getImage(data.contentfulPage.featuredMedia);
  return (
    <Layout pageTitle={data.contentfulPage.title}>
      <PageHeader img={img} title={data.contentfulPage.title} />
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
        gatsbyImageData (
          layout: FULL_WIDTH,
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }`

export default Blog;