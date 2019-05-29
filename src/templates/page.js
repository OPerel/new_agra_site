import React from 'react';
import Layout from "../components/layout";
import Sidebar from '../components/sidebar';
// import Img from "gatsby-image";

export default ({ pageContext }) => {
  return (
    <Layout>
      {/*<Img fluid={pageContext.featured_media.localFile.childImageSharp.fluid}/>*/}
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-xl-9" style={{borderLeft: '0.5px solid'}}>
            <h1>{pageContext.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
          </div>
          <div className="col col-sm-0 col-xl-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  )
}
