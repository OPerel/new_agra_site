import React from 'react';
import Layout from "../components/layout";
import PageLayout from '../components/pageLayout';
import PageHeader from '../components/pageHeader';

export default ({ pageContext, data }) => {
  const img = data.wordpressPage.featured_media.localFile.childImageSharp.fluid;
  return (
    <Layout>
      <PageHeader imgFile={img} title={pageContext.title} />
      <PageLayout>
        {/*<h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>*/}
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
      </PageLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPageByID($id: String!) {
    wordpressPage(id: { eq: $id }) {
      id
      slug
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
