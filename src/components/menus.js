import React from 'react';
import { Link, graphql, StaticQuery} from 'gatsby';
import './menus.css';

const Menus = () => (
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
              object
            }
          }
        }
      }
    }`
  } render={data => {
      const menus = data.allWordpressWpApiMenusMenusItems.edges;
      return (
        <>
          {
            menus.map(menu => {
              const items = menu.node.items;
              return (
                <div key={menu.node.name} className="menu">
                  <h5>{menu.node.name}</h5>
                  <ul key={menu.node.name} style={{listStyle: 'none'}}>
                    {
                      items.map((item, i) => {
                        return (
                          <li key={i} style={{margin: '8px 0'}}>
                            <Link
                            key={item.wordpress_id}
                            to={item.object === 'page' ? `/${item.object_slug}` : `post/${item.object_slug}`}
                            activeStyle={{
                              textDecoration: 'underline',
                              cursor: 'default',
                              color: 'darkgreen'
                            }}
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
        </>
      )
    }
  }/>
)

export default Menus;
