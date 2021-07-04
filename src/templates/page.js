import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout";
import PageLayout from '../components/pageLayout/pageLayout';
import PageHeader from '../components/pageHeader/pageHeader';
import ContactUs from '../components/contact/contact';
import Img from 'gatsby-image';
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const options = {
  // renderMark: {
  //   [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  // },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      console.log(node)
      return (
        <Img {...node.data.target} />
      )
    }
  }
}

const Page = ({ pageContext, data }) => {
  const img = data.contentfulPage.featuredMedia.fluid;
  console.log(pageContext)
  return (
    <Layout pageTitle={pageContext.title}>
      <PageHeader imgFile={img} title={pageContext.title} />
      <PageLayout>
        {
          pageContext.acf
          ? <div>
            test
              <p
                style={{ fontWeight: '500' }}
                dangerouslySetInnerHTML={{ __html: pageContext.acf.motto }}
              />
              <p
                style={{
                  fontStyle: 'italic',
                  textAlign: 'left'
                }}
                dangerouslySetInnerHTML={{ __html: pageContext.acf.quote_author }}
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

export default Page;

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
