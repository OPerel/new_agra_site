import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import PropTypes from "prop-types";
// import Helmet from "react-helmet";
import Menus from '../menus/menus';
import DropDown from '../dropDown/dropDown';
import Seo from '../seo';
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import './header.css';

const Header = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`{
    contentfulAsset(title:{eq:"logo"}) {
      title
      gatsbyImageData(
        height: 69,
        width: 160,
        formats: [AUTO, PNG],
        placeholder: BLURRED
      )
    }
  }`);
  const logo = getImage(data.contentfulAsset);
  const alt = data.contentfulAsset.title;
  return (
    <>
      <Seo title={pageTitle} />
      <nav className="nav-container container-fluid">
        <div className="nav container">
          <Link to='/'>
            <GatsbyImage image={logo} alt={alt} />
          </Link>
          <div id="desktop"><Menus menuList={['Main']} /></div>
          <div id="mobile"><DropDown /></div>
        </div>
      </nav>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
