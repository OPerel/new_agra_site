import React from 'react';
import Layout from "../components/layout";
import PageLayout from '../components/pageLayout';

// import Img from "gatsby-image";

export default ({ pageContext }) => {
  return (
    <Layout>
      {/*<Img fluid={pageContext.featured_media.localFile.childImageSharp.fluid}/>*/}
      <PageLayout>
        <h1>{pageContext.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
      </PageLayout>
    </Layout>
  )
}
