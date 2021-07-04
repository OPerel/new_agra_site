import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout";
import PageLayout from '../components/pageLayout/pageLayout';
import PageHeader from '../components/pageHeader/pageHeader';
import ContactUs from '../components/contact/contact';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import getRenderOptions from "../utils/renderOptions"

const options = getRenderOptions();

const Page = ({ pageContext, data }) => {
  const img = data.contentfulPage.featuredMedia.fluid;
  return (
    <Layout pageTitle={pageContext.title}>
      <PageHeader imgFile={img} title={pageContext.title} />
      <PageLayout>
        {
          pageContext.acf
          ? <div>
              <q
                style={{ fontWeight: '500' }}
                dangerouslySetInnerHTML={{ __html: pageContext.acf.Motto }}
              />
              <p
                style={{
                  fontStyle: 'italic',
                  textAlign: 'left'
                }}
                dangerouslySetInnerHTML={{ __html: pageContext.acf.QuoteAuthor }}
              />
            </div>
          : null
        }
        {renderRichText(pageContext.content, options)}
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
    contentfulPage(id: { eq: $id }) {
      id
      featuredMedia {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }`

export default Page;
