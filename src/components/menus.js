import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import './menus.css';

const selectMenus = (menuNames, menus) => {
  return menuNames.map(name => {
    return filterMenus(menus, name)
  });
}

const filterMenus = (menus, name) => {
  return menus.filter(menu => menu.node.name === name);
}

const queryMenus = graphql`{
  allWordpressWpApiMenusMenusItems{
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

const Menus = (props) => {
  return (
    <StaticQuery query={queryMenus} render={data => {
      const menus = selectMenus(props.menuList, data.allWordpressWpApiMenusMenusItems.edges).flat();
      return (
        <>
          {
            menus.map(menu => {
              const items = menu.node.items;
              return (
                <div key={menu.node.name} className="menu">
                  <h5>{menu.node.name}</h5>
                  <ul key={menu.node.name}>
                    {
                      items.map((item, i) => {
                        return (
                          <li key={i}>
                            <Link
                            key={item.wordpress_id}
                            to={item.object === 'page' ? `/${item.object_slug}` : `/post/${item.object_slug}`}
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
    }}/>
  )
}

export default Menus;
