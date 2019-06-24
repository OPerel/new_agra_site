import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import PageLayout from '../components/pageLayout';
import PageHeader from '../components/pageHeader';
import ContactUs from '../components/contact';

export default ({ pageContext, data }) => {
  const img = data.wordpressPage.featured_media.localFile.childImageSharp.fluid;
  return (
    <Layout pageTitle={pageContext.title}>
      <PageHeader imgFile={img} title={pageContext.title} />
      <PageLayout>
        {
          pageContext.acf
          ? <div>
              <p
              style={{ fontWeight: '500' }}
              dangerouslySetInnerHTML={{ __html: pageContext.acf.motto }}
              ></p>
              <p
              style=
                {{ fontStyle: 'italic',
                textAlign: 'left'
              }}
              dangerouslySetInnerHTML={{ __html: pageContext.acf.quote_author }}
              ></p>
            </div>
          : null
        }
        <div
        style={{ marginRight: '10px'}}
        dangerouslySetInnerHTML={{ __html: pageContext.content }}
        ></div>
        {
          pageContext.slug === 'contact'
          ? <ContactUs loc="contactPage" action="/contact" />
          : null
        }
      </PageLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageByID($id: String!) {
    wordpressPage(id: { eq: $id }) {
      id
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`
