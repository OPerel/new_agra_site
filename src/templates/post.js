import React from 'react';
import Layout from "../components/layout";
import PageLayout from '../components/pageLayout';

export default ({ pageContext }) => {
  return (
    <Layout>
      <PageLayout>
        <h1>{pageContext.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: pageContext.content }}></p>
      </PageLayout>
    </Layout>
  )
}
