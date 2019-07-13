import React from 'react';
import { graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menus from './menus';
import './footer.css';
import '../images/icons8-double-up-32.png';

const footerMenus = ['אתר אגרא', 'שירותים', 'כתבות אחרונות'];

const Footer = () => (
  <StaticQuery query={
    graphql`{
      icon: file(relativePath:{eq: "icons8-double-up-32.png"}) {
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
        <footer>
          <div className="container-fluid">
            <div className="footer-menus container">
              <Menus menuList={footerMenus} />
            </div>
          </div>
          <div className="bottom-footer container-fluid">
            <div className="btn-up">
              <button>
                <AnchorLink href="#top">
                  <Img fixed={fixed} alt="double arrow" />
                </AnchorLink>
              </button>
            </div>
            <p className="container">
              Agra Planning and Conculting Ltd &copy; {new Date().getFullYear()} Developed by <a href="https://github.com/OPerel" target="_blank" rel="noopener noreferrer">Ori Perelman</a>
            </p>
          </div>
        </footer>
      )
    }
  }/>
)

export default Footer;
