import React from 'react';
import { graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menus from '../menus/menus';
import './footer.css';
import '../../images/icons8-double-up-32.png';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const footerMenus = ['אתר אגרא', 'שירותים', 'כתבות אחרונות'];

const Footer = () => (
  <StaticQuery query={
    graphql`{
      icon: file(relativePath:{eq: "icons8-double-up-32.png"}) {
        childImageSharp {
          gatsbyImageData (
            height: 24,
            width: 24,
            formats: [AUTO, AVIF],
            placeholder: BLURRED
          )
        }
      }
    }`
  } render={data => {
      const icon = getImage(data.icon);
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
                  <GatsbyImage image={icon} alt="double arrow" />
                </AnchorLink>
              </button>
            </div>
            <p className="container">
              Agra Planning and Conculting Ltd &copy; {new Date().getFullYear()} Developed by <a href="https://www.oriperelman.com" target="_blank" rel="noopener nofollow">Ori Perelman</a>
            </p>
          </div>
        </footer>
      )
    }
  }/>
)

export default Footer;
