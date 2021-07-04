import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ContactUs from '../../contact/contact';
import './contactSection.css';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import getRenderOptions from "../../../utils/renderOptions"

const query = graphql`{
  contentfulPage(slug: {eq: "contact"}) {
    content {
      raw
    }
  }
}`;

const options = getRenderOptions();

const ContactSection = () => {
  const data = useStaticQuery(query);
  return(
    <section style={{ padding: '70px 0' }}>
      <h3 id="contact" style={{ textAlign: 'center' }}>צור קשר</h3>
      <div className="contact-section container">
        <ContactUs loc="homePage" action="/" />
        <div>
          {renderRichText(data.contentfulPage.content, options)}
        </div>
      </div>
    </section>
  )
}

export default ContactSection;
