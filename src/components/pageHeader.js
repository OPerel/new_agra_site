import React from 'react';
import Img from 'gatsby-image';

const PageHeader = (props) => (
  <>
    <Img fluid={props.imgFile} />
  </>
)

export default PageHeader;
