import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import PropTypes from "prop-types";
// import Helmet from "react-helmet";
import Menus from './menus';
import SEO from './seo';
import Img from 'gatsby-image';
import './header.css';

const Header = ({ siteTitle }) => (
  <>
    <SEO title={siteTitle}/>
    {/* <Helmet>
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
       <link href="https://fonts.googleapis.com/css?family=Rubik:500&display=swap" rel="stylesheet" />
    </Helmet> */}
    <StaticQuery query={
      graphql`{
        wordpressWpMedia(slug:{eq:"logo"}) {
          slug
          localFile {
            childImageSharp {
              fixed(width: 160, height: 69) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      }`
    } render={data => {
        // const { edges } = data.allWordpressWpApiMenusMenusItems;
        const { fixed } = data.wordpressWpMedia.localFile.childImageSharp;
        const alt = data.wordpressWpMedia.slug;
        return (
          <nav className="nav-container container-fluid">
            <div className="nav container">
              <Link to='/'>
                <Img fixed={fixed} alt={alt}/>
              </Link>
              <Menus menuList={['Main']} />
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

// <ul>
//   {
//     edges[0].node.items.map((item, i) => {
//       return (
//         <li key={i}>
//           <Link
//           key={item.wordpress_id}
//           to={`/${item.object_slug}`}
//           activeClassName="active"
//           >
//             {item.title}
//           </Link>
//         </li>
//       )
//     })
//   }
// </ul>
