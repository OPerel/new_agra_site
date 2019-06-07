import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import PageLayout from '../components/pageLayout';
import PageHeader from '../components/pageHeader';

export default ({ data }) => {
  const img = data.wordpressPage.featured_media.localFile.childImageSharp.fluid;
  const { edges }  = data.allWordpressPost;
  return (
    <Layout>
      <PageHeader imgFile={img} title={data.wordpressPage.title} />
      <PageLayout>
        {
          edges.map((edge, i) => {
            let { featured_media } = edge.node;
            return (
              <div key={i}>
                <h4 dangerouslySetInnerHTML={{ __html: edge.node.title }}></h4>
                <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}></p>
                {
                  featured_media
                  ? <Img fixed={featured_media.localFile.childImageSharp.fixed} />
                  : null
                }
              </div>
            )
          })
        }
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
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          date
          excerpt
          author {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 200, height: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }`
