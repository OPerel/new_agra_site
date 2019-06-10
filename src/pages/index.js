import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/indexComponents/hero';
import Services from '../components/indexComponents/services';
import Clients from '../components/indexComponents/clients';
import BlogSection from '../components/indexComponents/blogSection';
import ContactSection from '../components/indexComponents/contactSection';

export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Clients />
      <BlogSection />
      <ContactSection />
    </Layout>
  )
}
