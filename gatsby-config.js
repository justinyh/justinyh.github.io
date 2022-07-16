module.exports = {
  siteMetadata: {
    title: `Justin Hu | Full-Stack Software Engineer`,
    description: `I'm Justin Hu, a Full-Stack Software Engineer based out of Los Angeles. Follow along as I explore new ideas.`,
    author: `Justin Hu <justinyh@usc.edu>`,
    url: `http://justinyh.com`,
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `justin-hu-personal-website`,
        short_name: `justin`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-177296750-1",
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://localhost:8080/wordpress/graphql` // 👋
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
