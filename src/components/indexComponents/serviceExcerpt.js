import React from 'react';
import Img from 'gatsby-image';
import './serviceExcerpt.css';

const ServiceExcerpt = ({ page }) => {
  const { fixed } = page.acf.icon.localFile.childImageSharp;
  const excerpt = page.excerpt.replace(/[p\<\>\/]/g, '').replace(/[\[\&helli\;\]]/g, '');
  return (
    <div className="service">
      <div>
        <h4 dangerouslySetInnerHTML={{ __html: page.title }}></h4>
        <p dangerouslySetInnerHTML={{ __html: `${excerpt} ...` }}></p>
      </div>
      <Img fixed={fixed}/>
    </div>
  )
}

export default ServiceExcerpt;
