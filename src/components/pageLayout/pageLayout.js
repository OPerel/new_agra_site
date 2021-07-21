import React from 'react';
import Sidebar from '../sidebar/sidebar';

const PageLayout = (props) => (
  <div className="container">
    <div className="row">
      <div className="col col-12 col-md-9">
        {props.children}
      </div>
      <div className="col col-0 col-md-3">
        <Sidebar />
      </div>
    </div>
  </div>
)


export default PageLayout;
