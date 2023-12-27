# Plugins

Plugins in webpack allow you to perform a wide range of tasks, such as optimizing, minifying, and manipulating the output bundles. Here are some commonly used plugins in webpack:

- HtmlWebpackPlugin:
  Generates an HTML file with a reference to the bundled JavaScript file. It's often used to inject the correct script tags into your HTML file.

        ```bash
        npm install html-webpack-plugin --save-dev
        ```

        ```javascript
        const HtmlWebpackPlugin = require('html-webpack-plugin');

        module.exports = {
        // other configurations...
        plugins: [
            new HtmlWebpackPlugin({
            template: 'src/index.html', // Path to your HTML file
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
            }),
            // other plugins...
        ],
        };
        ```

- MiniCssExtractPlugin:
  Extracts CSS into separate files. Useful for separating your styles from your JavaScript bundle.

        ```bash
        npm install mini-css-extract-plugin --save-dev
        ```

        ```javascript
        const MiniCssExtractPlugin = require('mini-css-extract-plugin');

        module.exports = {
        // other configurations...
        module: {
            rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            // other rules...
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            }),
            // other plugins...
        ],
        };
        ```

- CleanWebpackPlugin:
  Cleans the output directory before each build, ensuring only the used files remain.

        ```bash
        npm install clean-webpack-plugin --save-dev
        ```

        ```javascript
        const { CleanWebpackPlugin } = require('clean-webpack-plugin');

        module.exports = {
        // other configurations...
        plugins: [
            new CleanWebpackPlugin(),
            // other plugins...
        ],
        };
        ```

- DefinePlugin:
  Allows you to define global constants which can be configured at compile time. Useful for setting environment variables.

        ```javascript
        const webpack = require("webpack");

        module.exports = {
        // other configurations...
        plugins: [
            new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
            }),
            // other plugins...
        ],
        };
        ```
