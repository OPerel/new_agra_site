import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/indexComponents/hero';
import Services from '../components/indexComponents/services';

export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <div style={{
        backgroundColor: '#bfbfbf',
        height: '70vh'
      }}></div>
      <div style={{
        backgroundColor: '#dfdfdf',
        height: '70vh'
      }}></div>
      <div style={{
        backgroundColor: '#bfbfbf',
        height: '70vh'
      }}></div>
    </Layout>
  )
}
