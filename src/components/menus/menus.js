import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import './menus.css';

const selectMenus = (menuNames, menus) => {
  return menuNames.map(name => {
    return menus.filter(menu => menu.node.name === name);
  });
}

const queryMenus = graphql`{
  allContentfulMenu {
    edges {
      node {
        name
        items {
          ... on ContentfulPage {
            title
            slug
            id
            __typename
          }
          ... on ContentfulPost {
            title
            slug
            id
            __typename
          }
        }
      }
    }
  }
}`

const Menus = (props) => {
  const data = useStaticQuery(queryMenus);
  const { edges } = data.allContentfulMenu;
  const menus = selectMenus(props.menuList, edges).reduce((acc, menu) => {
    return acc.concat(menu)
  }, []);
  return (
    <>
      {
        menus.map(menu => {
          const { items } = menu.node;
          return (
            <div key={menu.node.name} className="menu">
              <h5>{menu.node.name}</h5>
              <ul key={menu.node.name}>
                {
                  items.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link
                        key={item.id}
                        to={item.__typename === 'ContentfulPage' ? `/${item.slug}` : `/post/${item.slug}`}
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


export default Menus;
