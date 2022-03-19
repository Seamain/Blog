/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Seamain' Blog`,
    description:`就是一个小小的博客网站，有时间就更新啦。`,
    email: 'quanminjun37@gmail.com',
    publickey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\n' +
        '\n' +
        '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\n' +
        'Ss/6WpsLGNNV1U4H\n' +
        '=jujE\n' +
        '-----END PGP PUBLIC KEY BLOCK-----',
    author: `Seamain&Jimmy`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Directus",
        fieldName: "directus",
        url: "https://t3tmqp0w.directus.app/graphql",
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `GatsbyJS`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#6b37bf`,
    //     theme_color: `#6b37bf`,
    //     // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    //     // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    //     display: `standalone`,
    //     icon: `src/images/icon.png`, // This path is relative to the root of the site.
    //   },
    // },
      `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`src`,
        path:`${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
