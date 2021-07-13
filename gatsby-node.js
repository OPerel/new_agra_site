// /**
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

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
                gatsbyImageData (
                  layout: CONSTRAINED
                  formats: [AUTO, WEBP]
                  placeholder: BLURRED
                )
                title
              }
            }
            acf {
              Motto
              QuoteAuthor
            }
          }
        }
      }
      allContentfulPost {
        edges {
          node {
            title
            slug
            excerpt
            date
            id
            content {
              raw
              references {
                __typename
                contentful_id
                gatsbyImageData (
                  layout: CONSTRAINED
                  formats: [AUTO, WEBP]
                  placeholder: BLURRED
                )
              }
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
  const { allContentfulPage, allContentfulPost } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve("src/templates/page.js")
  allContentfulPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: slash(pageTemplate),
      context: edge.node,
    })
  })

  const postTemplate = path.resolve("src/templates/post.js")
  // The Post ID is prefixed with 'POST_'
  allContentfulPost.edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}`,
      component: slash(postTemplate),
      context: edge.node,
    })
  })
}
