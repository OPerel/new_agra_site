import React from 'react';
import Img from 'gatsby-image';

const PageHeader = (props) => (
  <>
    <Img fluid={props.imgFile} style={{
      marginBottom: '5%',
      filter: 'saturate(60%)'
    }}/>
  </>
)

export default PageHeader;
