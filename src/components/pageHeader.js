import React from 'react';
import BgImg from 'gatsby-background-image';
import './pageHeader.css';

const PageHeader = (props) => (
  <>
    <BgImg fluid={props.imgFile} className="header-bg">
      <div className="container">
        <h1 dangerouslySetInnerHTML={{ __html: props.title }}></h1>
      </div>
    </BgImg>
  </>
)

export default PageHeader;
