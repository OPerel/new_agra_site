import React from 'react';
import Img from 'gatsby-image';
import './serviceExcerpt.css';

const ServiceExcerpt = ({ page }) => {
  const { fixed } = page.acf.icon.localFile.childImageSharp;
  return (
    <div className="service">
      <div>
        <h4 dangerouslySetInnerHTML={{ __html: page.title }} />
        <p dangerouslySetInnerHTML={{ __html: page.excerpt }} />
      </div>
      <Img fixed={fixed}/>
    </div>
  )
}

export default ServiceExcerpt;
