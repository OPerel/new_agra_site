import React from 'react';
import Layout from "../components/layout";
import SEO from '../components/seo';

export default ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <h1>{pageContext.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: pageContext.content }}></p>
    </Layout>
  )
}
