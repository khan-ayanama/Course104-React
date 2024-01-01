const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/file-01.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name].[hash].[ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
      //   {
      //     test: /\.(jpg|png|svg|gif)$/,
      //     use: {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[hash].[ext]",
      //         outputPath: "assets",
      //       },
      //     },
      //   },
    ],
  },
};
