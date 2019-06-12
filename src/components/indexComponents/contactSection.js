import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ContactUs from '../contact';
import './contactSection.css';

const ContactSection = () => (
  <StaticQuery
    query={graphql`{
      wordpressPage(slug: { eq: "contact" }) {
        content
      }
    }`}
    render={data => {
      return(
        <section style={{ padding: '70px 0' }}>
          <h2 id="contact" style={{ textAlign: 'center' }}>צור קשר</h2>
          <div className="contact-section container">
            <ContactUs loc="homePage" action="/" />
            <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}></div>
          </div>
        </section>
      )
    }}
  />
)

export default ContactSection;
