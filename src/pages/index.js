import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/indexComponents/hero';
import Services from '../components/indexComponents/services';
import Clients from '../components/indexComponents/clients';
import BlogSection from '../components/indexComponents/blogSection';

export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Clients />
      <BlogSection />
      <div
      id="contact"
      style={{
        backgroundColor: '#ffffff',
        height: '70vh'
      }}></div>
    </Layout>
  )
}
