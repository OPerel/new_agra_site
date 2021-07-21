import React from 'react';
import { BgImage } from "gbimage-bridge"
import './pageHeader.css';

const PageHeader = (props) => (
  <>
    <BgImage image={props.img} className="header-bg">
      <div className="container">
        <h1 dangerouslySetInnerHTML={{ __html: props.title }} />
      </div>
    </BgImage>
  </>
)

export default PageHeader;
