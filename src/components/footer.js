import React from 'react';
import { Link, graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import './footer.css';
import '../images/dbl-up.png';

const Footer = () => (
  <StaticQuery query={
    graphql`{
      allWordpressWpApiMenusMenusItems(filter:{slug:{nin:"main"}}){
        edges {
          node {
            name
            items {
              title
              wordpress_id
              object_slug
            }
          }
        }
      }
      icon: file(relativePath:{eq: "dbl-up.png"}) {
        childImageSharp {
          fixed (width: 24, height: 24) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }`
  } render={data => {
      const footerMenus = data.allWordpressWpApiMenusMenusItems.edges;
      const upArrow = data.icon.childImageSharp.fixed;
      return (
        <>
          <footer className="container-fluid">
            <div className="footer-menus container">
              {
                footerMenus.map(menu => {
                  const items = menu.node.items;
                  return (
                    <div key={menu.node.name} className="footer-menu">
                      <h5>{menu.node.name}</h5>
                      <ul key={menu.node.name}>
                        {
                          items.map((item, i) => {
                            return (
                              <li key={i}>
                                <Link
                                key={item.wordpress_id}
                                to={`/${item.object_slug}`}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  )
                })
              }
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
