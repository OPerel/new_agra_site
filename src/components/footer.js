import React from 'react';
import { Link, graphql, StaticQuery} from 'gatsby';
import './footer.css';

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
    }`
  } render={data => {
      const footerMenus = data.allWordpressWpApiMenusMenusItems.edges;
      // console.log(footerMenus);
      return (
        <footer className="container-fluid">
          <div className="footer-menus container">
            {
              footerMenus.map(menu => {
                const items = menu.node.items;
                return (
                  <div key={menu.node.name} className="footer-menu">
                    <h6 style={{color: 'white'}}>{menu.node.name}</h6>
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
          <div>© {new Date().getFullYear()} נבנה ע"י אורי</div>
        </footer>
      )
    }
  }/>
)

export default Footer;
