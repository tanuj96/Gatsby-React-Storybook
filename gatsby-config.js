/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: '.env'
});

const fonts = [];
if (process.env.GATSBY_HEADINGFONT) {
  fonts.push(process.env.GATSBY_HEADINGFONT);
}
if (process.env.GATSBY_BODYFONT) {
  fonts.push(process.env.GATSBY_BODYFONT);
}

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-offline',
    'gatsby-theme-material-ui',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'static/favicon.ico'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        host: process.env.CONTENTFUL_HOST,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
      }
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'cartusgatsbycontentful'
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAG_ID,
        includeInDevelopment: false
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts,
        display: 'swap'
      }
    }
  ]
};
