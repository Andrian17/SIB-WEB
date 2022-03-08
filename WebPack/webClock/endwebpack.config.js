// const path = require("path");

// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: {
//     index: "./src/js/index.js",
//   },
//   output: {
//     filename: "[name].bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   mode: "development",

//   //loader
//   module: {
//     rules: [
//       {
//         /* CSS import */
//         test: /\.css$/,
//         use: [
//           {
//             loader: "style-loader",
//           },
//           {
//             loader: "css-loader",
//           },
//         ],
//       },
//       {
//         /* JS Babel loader */
//         test: /\.js$/,
//         exclude: "/node_modules/",
//         use: [
//           {
//             loader: "babel-loader",
//             options: {
//               presets: ["@babel/preset-env"],
//             },
//           },
//         ],
//       },
//     ],
//   },

//   /* HTML Webpack Plugins */
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/template.html",
//       filename: "index.html",
//     }),
//   ],
// };
