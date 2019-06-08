import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/indexComponents/hero';

export default () => {
  return (
    <Layout>
      <Hero />
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
