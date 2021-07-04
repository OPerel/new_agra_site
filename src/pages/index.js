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


/**
 * TODO:
 * 
 * 1. folder and file structure
 * 2. convert all images to webp
 * 3. better styles for dropdown btn and menu
 * 4. add reveal animations for all landing page's sections
 * 5. ServiceExcerpt mobile img size
 * 6. typescript (?)
 * 
 * MOVE OUT OF WORDPRESS!!
 */