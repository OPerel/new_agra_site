import React from 'react';
import { graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import Menus from './menus';
import './footer.css';
import '../images/dbl-up.png';

const Footer = () => (
  <StaticQuery query={
    graphql`{
      icon: file(relativePath:{eq: "dbl-up.png"}) {
        childImageSharp {
          fixed (width: 24, height: 24) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }`
  } render={data => {
      const upArrow = data.icon.childImageSharp.fixed;
      return (
        <>
          <footer className="container-fluid">
            <div className="footer-menus container">
              <Menus />
            </div>
          </footer>
          <div className="bottom-footer container-fluid">
            <div className="btn-up"><button><Img fixed={upArrow} alt="double arrow" /></button></div>
            <p className="container">© {new Date().getFullYear()} נבנה ע"י אורי</p>
          </div>
        </>
      )
    }
  }/>
)

export default Footer;
