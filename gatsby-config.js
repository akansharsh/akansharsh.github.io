module.exports = {
  siteMetadata: {
    title: `Harshvardhan weds Akansha`,
    description: `Harshvardhan weds Akansha - 15th November, 2019 - Kota, Rajasthan`,
    author: `@maddhruv`,
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
        name: `AkansHarsh`,
        short_name: `AkansHarsh`,
        start_url: `/`,
        background_color: `#e74c3c`,
        theme_color: `#c0392b`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
