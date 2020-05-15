module.exports = {
    siteMetadata: {
        title: `FOSS NSS | Free and Open Source Software Cell (FOSS Cell) of NSSCE`,
        description: `The FOSS Cell (FOSS NSS) of NSS College of Engineering, Palakkad is a cell of students who like to explore and spread the open-source software ecosystem. Roots of this FOSS Cell dates back to the year 2009. Welcoming the whole campus to the world of Freedom, Community and Free Software. Free software, Free Campus, Free Society.`,
        author: 'admin@fossnss',
        siteUrl: `https://fossnss.org`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `FOSS Cell NSSCE`,
                short_name: `FOSSNSS`,
                start_url: `/`,
                background_color: `#2980b9`,
                theme_color: `#2980b9`,
                display: `standalone`,
                icon: `assets/images/foss-icon.png`, // This path is relative to the root of the site.
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
                path: `${__dirname}/contents`,
                name: `markdown-pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `gallery`,
                path: `${__dirname}/contents/gallery`, 
            },
         },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        optional: {
                            maxWidth: 750,
                            linkImagesToOriginal: false,
                            tracedSVG: true,
                            showCaptions: true,
                            markdownCaptions: true
                        },
                    },
                    {
                        resolve: `gatsby-remark-figure-caption`,
                        options: { figureClassName: 'md-figure' },
                    }
                ],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        //  `gatsby-plugin-offline`, Disable during initial devloping
    ],
};
