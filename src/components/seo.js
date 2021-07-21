/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ meta, title, description }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author
          }
        }
      }
    `
  )

  const pageTitle = title ? title : site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: "he",
      }}
      title={pageTitle}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : ''}
      meta={[
        {
          name: `google-site-verification`,
          content: `dMUJPuYnLFoS9U0ei_WgrtsMcYNM8IOFKhvXTZGAcJY`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: site.siteMetadata.image,
        },
        {
          name: `og:url`,
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `og:title`,
          property: `og:title`,
          content: pageTitle,
        },
        {
          name: `og:description`,
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:type`,
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          property: `og:image`,
          content: site.siteMetadata.image,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `he`,
  meta: [],
  title: null,
  description: null,
  image: null,
}

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default Seo;
