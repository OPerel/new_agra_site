import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import PropTypes from "prop-types";
// import Helmet from "react-helmet";
import Menus from './menus';
import DropDown from './dropDown';
import SEO from './seo';
import Img from 'gatsby-image';
import './header.css';

const Header = ({ pageTitle }) => (
  <>
    <SEO title={pageTitle} />
    <StaticQuery query={
      graphql`{
        wordpressWpMedia(slug:{eq:"logo"}) {
          slug
          localFile {
            childImageSharp {
              fixed(width: 160, height: 69) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }`
    } render={data => {
        const { fixed } = data.wordpressWpMedia.localFile.childImageSharp;
        const alt = data.wordpressWpMedia.slug;
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
