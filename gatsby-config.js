module.exports = {
  siteMetadata: {
    title: "lily-gatsby",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
