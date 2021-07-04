import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import PropTypes from "prop-types";
// import Helmet from "react-helmet";
import Menus from '../menus/menus';
import DropDown from '../dropDown/dropDown';
import Seo from '../seo';
import Img from 'gatsby-image';
import './header.css';

const Header = ({ pageTitle }) => (
  <>
    <Seo title={pageTitle} />
    <StaticQuery query={
      graphql`{
        contentfulAsset(title:{eq:"logo"}) {
          title
          fixed(width: 160, height: 69) {
            ...GatsbyContentfulFixed
          }
        }
      }`
    } render={data => {
        const { fixed } = data.contentfulAsset;
        const alt = data.contentfulAsset.title;
        return (
          <nav className="nav-container container-fluid">
            <div className="nav container">
              <Link to='/'>
                <Img fixed={fixed} alt={alt} />
              </Link>
              <div id="desktop"><Menus menuList={['Main']} /></div>
              <div id="mobile"><DropDown /></div>
            </div>
          </nav>
        )
      }
    }/>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
