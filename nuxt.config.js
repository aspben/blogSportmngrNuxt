export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      { name: "robots", content: "index, follow" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:400,100,500,300italic,500italic,700italic,900,300"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/fluiditype.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/lazyload"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/google-gtag"],

  "google-gtag": {
    id: "G-1FZ0MEZV8C"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      var path = require("path");

      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "posts"),
        loader: "frontmatter-markdown-loader"
      });
    }
  }
};
