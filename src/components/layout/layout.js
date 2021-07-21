import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.css"

const Layout = ({ children, pageTitle }) => (
  <div dir="rtl">
    <div id="top" offset="-900" />
    <Header pageTitle={pageTitle} />
    <div>{children}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
