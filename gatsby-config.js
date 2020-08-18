const path = require(`path`);
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-sass',
    '@contentful/gatsby-transformer-contentful-richtext',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sabrina Andres - Los Angeles Art Consultant',
        short_name: 'Sabrina Andres Art Consultant',
        description:
          'Sabrina Andres offers Art Consulting services in the Los Angeles and Pasadena area, contact her today to find up and coming artists',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#f1f1ef',
        display: 'standalone',
        icon: 'src/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'static', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'e5lecj7msodu',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Playfair Display', 'Raleway'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'sab_rina_n',
        access_token: process.env.INSTAGRAM_API_KEY,
        instagram_id: process.env.INSTAGRAM_APP_ID,
        paginate: 100,
        maxPosts: 1000,
        hashtags: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: path.join(__dirname, 'static', 'images', 'header'), // wherever background images are stored
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://sabrinandres.com',
    title: 'Sabrina Andres - Los Angeles Art Consultant',
    titleAlt: 'Sabrina Andres Art Consultant',
    description:
      'Sabrina Andres offers Art Consulting services in the Los Angeles and Pasadena area, contact her today to find up and coming artists',
    banner: '/logos/logo.png',
    headline:
      'Portfolio and Contact site of Sabrina Andres, Los Angeles based Art Consultant',
    siteLanguage: 'en',
    ogLanguage: 'en_US',
    author: 'Alex Andres',
  },
};
