import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Img from 'gatsby-image';
import './header.css';


const Header = ({ siteTitle }) => (
  <StaticQuery query={
    graphql`{
      allWordpressWpApiMenusMenusItems(filter:{name:{eq:"Main"}}) {
        edges {
          node {
            items {
              wordpress_id
              title
              object_slug
            }
          }
        }
      }
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
      const { edges } = data.allWordpressWpApiMenusMenusItems;
      const { fixed } = data.wordpressWpMedia.localFile.childImageSharp;
      const alt = data.wordpressWpMedia.slug;
      return (
        <nav className="nav-container container-fluid">
          <div className="nav container">
            <Link to='/'>
              <Img fixed={fixed} alt={alt}/>
            </Link>
            <ul>
              {
                edges[0].node.items.map((item, i) => {
                  return (
                    <li key={i}>
                      <Link
                      key={item.wordpress_id}
                      to={`/${item.object_slug}`}
                      activeClassName="active"
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </nav>
      )
    }
  }/>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
