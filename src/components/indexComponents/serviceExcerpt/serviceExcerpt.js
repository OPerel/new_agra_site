import React from 'react';
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import './serviceExcerpt.css';

const ServiceExcerpt = ({ page }) => {
  const icon = getImage(page.excerptIcon);
  console.log('icon: ', icon)
  return (
    <div className="service">
      <div>
        <h4 dangerouslySetInnerHTML={{ __html: page.title }} />
        <p dangerouslySetInnerHTML={{ __html: page.excerpt }} />
      </div>
      <GatsbyImage image={icon} alt={`${page.title} excerpt icon`} className="service-img" />
    </div>
  )
}

export default ServiceExcerpt;
