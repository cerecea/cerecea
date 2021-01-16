require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: "Cerecea",
    siteLanguage: "ES",
    siteTitleAlt: `Cerecea - Blog`,
    siteDescription: "Cerecea es la unión de nuestra pasión por la fotografía y la escritura. Subimos nuestros mejores textos e imágenes.",
    author: "Cerecea",
    siteImage: "/android-chrome-192x192.png",
    description: "Cerecea es la unión de nuestra pasión por la fotografía y la escritura. Subimos nuestros mejores textos e imágenes.",
    siteHeadline: "Cerecea es la unión de nuestra pasión por la fotografía y la escritura.",
    siteUrl: "https://cerecea.github.io",
    social: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/pic.dave/",
      }
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Blog`, slug: `/blog` },
          { name: `Mis favoritos`, slug: `/equipment` },
          { name: `Sobre mí`, slug: `/about` },
        ],
      },
    },
    { 
      resolve: `gatsby-plugin-google-gtag`,
      options: {
      trackingIds: [
        "G-BP504S5PF8"
      ],
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-BP504S5PF8",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `41351102204`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cerecea - blog`,
        short_name: `cerecea`,
        description: `Cerecea es la unión de nuestra pasión por la fotografía y la escritura. Subimos nuestros mejores textos e imágenes.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0B2A3F`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
      },
    },
  ],
}
