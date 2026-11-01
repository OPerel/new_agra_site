import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import './pageHeader.css';

const PageHeader = (props) => (
  <header className="header-bg">
    <GatsbyImage image={props.img} alt="logo" className="header-bg-image" />
    <div className="container header-bg-content">
      <h1 dangerouslySetInnerHTML={{ __html: props.title }} />
    </div>
  </header>
)

export default PageHeader;
