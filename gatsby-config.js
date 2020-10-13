module.exports = {
  siteMetadata: {
    title: 'Hero Damage',
    url: 'https://www.herodamage.com',
    github: 'https://github.com/herotc/shadowlands-prepatch.herodamage.com',
    description: 'Class theorycrafting community, latest simulation results and resources -based on SimulationCraft- for World of Warcraft.',
    keywords: 'herotc, herodamage, world of warcraft, shadowlands prepatch, wow sl prepatch, theorycrafting, simulationcraft, simc',
    wowClasses: ['death-knight', 'demon-hunter', 'druid', 'hunter', 'mage', 'monk', 'paladin', 'priest', 'rogue', 'shaman', 'warlock', 'warrior']
  },
  plugins: [
    'gatsby-plugin-no-sourcemaps',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-109496873-1',
        head: true,
        anonymize: true,
        respectDNT: true
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-herodamage-material-ui',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production'
      }
    },
    'gatsby-plugin-herodamage-layout',
    'gatsby-plugin-herodamage-i18n',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'reports',
        path: `${__dirname}/src/reports/`
      }
    },
    'gatsby-plugin-herodamage-reports',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`
      }
    },
    'gatsby-plugin-herodamage-posts'
  ]
}
