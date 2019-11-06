module.exports = {
  siteMetadata: {
    title: `FOSS NSS | Free and Open Source Software Cell of NSSCE`,
    description: `Free and Open Source Software Cell of NSS College of Engineering, Palakkad`,
    author: `@fossadmin`,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FOSS Cell NSSCE`,
        short_name: `FOSSNSS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/foss-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-catch-links',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/pages`,
          name: 'pages',
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/content`,
          name: `markdown-pages`,
        },
      },
      'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //  `gatsby-plugin-offline`, Disable during initial devloping
  ],
}
