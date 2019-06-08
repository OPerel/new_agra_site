import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/indexComponents/hero';
import Services from '../components/indexComponents/services';
import Clients from '../components/indexComponents/clients';

export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Clients />
      <div style={{
        backgroundColor: '#f8f9f9',
        height: '70vh'
      }}></div>
      <div style={{
        backgroundColor: '#ffffff',
        height: '70vh'
      }}></div>
    </Layout>
  )
}
