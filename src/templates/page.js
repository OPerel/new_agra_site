import React from 'react';
import Layout from "../components/layout";
import SEO from '../components/seo';
// import Img from "gatsby-image";

export default ({ pageContext }) => {
    return (
        <Layout>
            <SEO title={pageContext.title} />
            {/*<Img fluid={pageContext.featured_media.localFile.childImageSharp.fluid}/>*/}
            <h1>{pageContext.title}</h1>
            <h2>This is a page</h2>
            <h3>{pageContext.author.name}</h3>
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
        </Layout>
    )
}
