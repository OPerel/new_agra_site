import React from 'react';
import { Link } from 'gatsby';
import BlogComponent from '../../blogComponent';
import Button from '../../button/button';
import './blogSection.css';

const BlogSection = () => (
  <section style={{
    backgroundColor: '#f8f9f9',
    padding: '70px 0'
  }}>
    <h3 style={{ textAlign: 'center' }}>כתבות אחרונות</h3>
    <div className="container">
      <BlogComponent />
      <Link to="/blog" style={{ textDecoration: 'none' }}>
        <Button text="לכל הכתבות" classN="blog-btn" />
      </Link>
    </div>
  </section>
)

export default BlogSection;
