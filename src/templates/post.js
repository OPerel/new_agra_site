import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import PageLayout from '../components/pageLayout';
import Img from 'gatsby-image';
import './post.css';

export default ({ pageContext, data }) => {
  const d = new Date(pageContext.date);

  var months = new Array ();
  months[0] = "ינואר";
  months[1] = "פברואר";
  months[2] = "מרץ";
  months[3] = "אפריל";
  months[4] = "מאי";
  months[5] = "יוני";
  months[6] = "יולי";
  months[7] = "אוגוסט";
  months[8] = "ספטמבר";
  months[9] = "אוקטובר";
  months[10] = "נובמבר";
  months[11] = "דצמבר";

  const date = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  return (
    <Layout>
      <PageLayout>
        <h1 className="post-heading">{pageContext.title}</h1>
        <span className="post-details">
          פורסם ב<a href="#">{date}</a> ע"י <a href="#">{pageContext.author.name}</a>
        </span>
        {
          data.wordpressPost.featured_media ?
          <Img
          fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid}
          className="post-image"
          /> :
          null
        }
        <p
        className="post-content"
        dangerouslySetInnerHTML={{ __html: pageContext.content }}
        ></p>
      </PageLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      slug
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }`
