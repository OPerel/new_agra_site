import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageLayout from '../components/pageLayout';
import PageHeader from '../components/pageHeader';
import PostPrev from '../components/postPrev';

export default ({ data }) => {
  const img = data.wordpressPage.featured_media.localFile.childImageSharp.fluid;
  const { edges }  = data.allWordpressPost;
  return (
    <Layout>
      <PageHeader imgFile={img} title={data.wordpressPage.title} />
      <PageLayout>
        {
          edges.map((edge, i) => {
            return (
              <PostPrev
              key={edge.node.id}
              slug={edge.node.slug}
              author={edge.node.author.name}
              date={edge.node.date}
              title={edge.node.title}
              excerpt={edge.node.excerpt}
              img={edge.node.featured_media}
              />
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
