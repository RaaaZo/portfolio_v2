module.exports = {
  siteMetadata: {
    title: `Mateusz Koprowicz Portfolio`,
    description: `Portfolio wykonane przez Mateusza Koprowicza. Jeśli jesteś zainteresowany zatrudnieniem mnie odezwij się!`,
    author: `Mateusz Koprowicz`,
    baseUrl: `https://raaazo.github.io/portfolio_v2/`,
  },
  pathPrefix: "/portfolio_v2",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
            },
            {
              family: "Dancing Script",
              variants: ["700"],
            },
          ],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
}
