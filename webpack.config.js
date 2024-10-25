// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  //Webpack-dev-server config.
  devtool: "eval-source-map",
  //Server command: npx  webpack serve
  devServer: {
  //It watches for changes in JS modules only, so we add our html.
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        // WP will watch for .css imports and use them as modules.
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],//They have to be in this exact order.
      },
      // {
      //   // Image files we reference in our HTML template, e.g. as the src of an <img>
      //   test: /\.html$/i,
      //   loader: "html-loader",
      // },
      {
        // Tell WP to watch imported image sources in our JS doc
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

//You may not need everything above. 
//If your project does not have images with local file path sources 
//in your HTML template, you do not need html-loader set up. 
//If you aren’t using any local images in your JavaScript, you won’t
//need the image asset/resource rule set up.
//Similarly, in the future, you may end up working with things that 
//need a special loader or plugin, such as custom fonts or preprocessors. 
//You can always use Google or reference Webpack’s documentation for 
//instructions on what you’d need when that time comes.
