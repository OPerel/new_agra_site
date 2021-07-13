import React from 'react';
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import './serviceExcerpt.css';

const ServiceExcerpt = ({ page }) => {
  const icon = getImage(page.excerptIcon);
  return (
    <div className="service">
      <div>
        <h4 dangerouslySetInnerHTML={{ __html: page.title }} />
        <p dangerouslySetInnerHTML={{ __html: page.excerpt }} />
      </div>
      <GatsbyImage image={icon} alt={`${page.title} excerpt icon`} />
    </div>
  )
}

export default ServiceExcerpt;
