import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout";
import PageLayout from '../components/pageLayout/pageLayout';
import PageHeader from '../components/pageHeader/pageHeader';
import ContactUs from '../components/contact/contact';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import getRenderOptions from "../utils/renderOptions";
import { getImage } from "gatsby-plugin-image"

const options = getRenderOptions();

const Page = ({ pageContext, data }) => {
  const img = getImage(data.contentfulPage.featuredMedia);
  return (
    <Layout pageTitle={pageContext.title}>
      <PageHeader img={img} title={pageContext.title} />
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
        <div style={{ marginRight: '10px' }}>
          {renderRichText(pageContext.content, options)}
        </div>
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
        gatsbyImageData(
          layout: FULL_WIDTH,
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }`

export default Page;
