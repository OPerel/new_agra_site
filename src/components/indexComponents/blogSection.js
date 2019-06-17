import React from 'react';
import { Link } from 'gatsby';
import BlogComponent from '../blogComponent';
import Button from '../button';
import './blogSection.css';

const BlogSection = () => (
  <section style={{
    backgroundColor: '#f8f9f9',
    padding: '70px 0'
  }}>
    <h2 style={{ textAlign: 'center' }}>כתבות אחרונות</h2>
    <div className="container">
      <BlogComponent />
      <Link to="/blog" style={{ textDecoration: 'none' }}>
        <Button text="לכל הכתבות" classN="blog-btn" />
      </Link>
    </div>
  </section>
)

export default BlogSection;
