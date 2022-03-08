const path = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    //   CSS
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  //Plugin
  plugins: [
    //HTML Webpack Plugin
    new HtmlwebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
    }),
  ],
};
