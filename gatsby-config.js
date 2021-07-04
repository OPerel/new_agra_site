require("dotenv").config({
  path: '.env'
})

module.exports = {
  siteMetadata: {
    title: `אגרא יעוץ ותכנון בע"מ`,
    description: `ניהול ותכנון – מתארי, פרוגרמטי, פונקציונלי, הנדסי וסביבתי. עשרות שנות ניסיון ביעוץ ותכנון לתעשייה, לוגיסטיקה, משרדי ממשלה, רשויות ממלכתיות ומקומיות, פרויקטים סביבתיים.`,
    siteUrl: `https://www.agraconsulting.co.il`,
    image: `/src/images/social.png`,
    author: `https://github.com/OPerel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fav-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-advanced-sitemap`,
  ],
}
