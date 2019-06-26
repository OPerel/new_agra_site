import React from "react"
import PropTypes from "prop-types"

import Header from "./header";
import Footer from "./footer";
import "./layout.css"

const Layout = ({ children, pageTitle }) => (
  <>
    <div id="top" offset="-900"></div>
    <Header pageTitle={pageTitle} />
    <div>{children}</div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
