import React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/indexComponents/hero/hero';
import Services from '../components/indexComponents/services/services';
import Clients from '../components/indexComponents/clients/clients';
import BlogSection from '../components/indexComponents/blogSection/blogSection';
import ContactSection from '../components/indexComponents/contactSection/contactSection';

const Index = () => {
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

export default Index;
/**
 * TODO:
 *
 * 3. better styles for dropdown btn and menu
 * 4. add reveal animations for all landing page's sections
 * 5. i18n
 * 6. tests
 * 8. typescript (?)
 *
 */