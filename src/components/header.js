import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Img from 'gatsby-image';


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
        localFile {
          childImageSharp {
            fixed(width: 160, height: 69) {
              ...GatsbyImageSharpFixed_tracedSVG
              originalName
            }
          }
        }
      }
    }`
  } render={data => {
      const { edges } = data.allWordpressWpApiMenusMenusItems;
      return (
        <nav
        className="container-fluid"
        style={{
          padding: '30px',
          backgroundColor: 'lightgrey',
        }}>
          <div className="nav container">
            <Link to='/'>
              <Img fixed={data.wordpressWpMedia.localFile.childImageSharp.fixed}/>
            </Link>
            {
              edges[0].node.items.map((item, i) => {
                return (
                  <Link
                  style={{margin: '20px'}}
                  key={item.wordpress_id}
                  to={`/${item.object_slug}`}
                  >
                    {item.title}
                  </Link>
                )
              })
            }
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
