// /**
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// from gatsby-source-wordpress:

const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulPage(filter:{slug:{nin:"blog"}}) {
        edges {
          node {
            id
            title
            slug
            content {
              raw
              references {
                __typename
                contentful_id
                fluid {
                  srcWebp
                  srcSetWebp
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
                title
              }
            }
            acf {
              Motto
            }
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            title
            content
            date
            excerpt
            author {
              slug
              name
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allContentfulPage, allWordpressPost } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve("src/templates/page.js")
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allContentfulPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: slash(pageTemplate),
      context: edge.node,
    })
  })

  const postTemplate = path.resolve("src/templates/post.js")
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}`,
      component: slash(postTemplate),
      context: edge.node,
    })
  })
}
