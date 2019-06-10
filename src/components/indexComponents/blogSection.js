import React from 'react';
import BlogComponent from '../blogComponent';

const BlogSection = () => (
  <section style={{
    backgroundColor: '#f8f9f9',
    padding: '70px 0'
  }}>
    <h2 style={{ textAlign: 'center' }}>כתבות אחרונות</h2>
    <div className="container">
      <BlogComponent />
    </div>
  </section>
)

export default BlogSection;
