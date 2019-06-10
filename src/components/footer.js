import React from 'react';
import { graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menus from './menus';
import './footer.css';
import '../images/dbl-up.png';

const footerMenus = ['אתר אגרא', 'שירותים', 'כתבות אחרונות'];

const Footer = () => (
  <StaticQuery query={
    graphql`{
      icon: file(relativePath:{eq: "dbl-up.png"}) {
        childImageSharp {
          fixed (width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`
  } render={data => {
      const { fixed } = data.icon.childImageSharp;
      return (
        <>
          <footer className="container-fluid">
            <div className="footer-menus container">
              <Menus menuList={footerMenus} />
            </div>
          </footer>
          <div className="bottom-footer container-fluid">
            <div className="btn-up">
              <button>
                <AnchorLink href="#top">
                  <Img fixed={fixed} alt="double arrow" />
                </AnchorLink>
              </button>
            </div>
            <p className="container">נבנה ע"י אורי  {new Date().getFullYear()}</p>
          </div>
        </>
      )
    }
  }/>
)

export default Footer;
