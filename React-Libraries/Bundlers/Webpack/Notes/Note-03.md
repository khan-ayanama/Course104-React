# Loaders

To handle CSS and Sass files in your webpack setup, you'll need to use appropriate loaders. Here's a step-by-step guide on how to configure webpack to handle CSS and Sass files using style-loader, css-loader, and sass-loader.

`Step 1:` Install loaders
First, install the necessary loaders and dependencies:

```bash
npm install style-loader css-loader sass-loader node-sass --save-dev
```

`style-loader:` Injects styles into the DOM.
`css-loader:` Resolves imports and urls in your CSS files.
`sass-loader:` Compiles Sass to CSS.
`node-sass:` Peer dependency for sass-loader.

`Step 2:` Update webpack configuration
Modify your webpack.config.js to include rules for handling CSS and Sass files:

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
```

For files ending with .css, the style-loader and css-loader are used.
For files ending with .scss, the style-loader, css-loader, and sass-loader are used.

`Step 3:` Import CSS or Sass files in your JavaScript
Now, you can import CSS or Sass files directly into your JavaScript files. For example:

```javascript
// src/styles.css
body {
  background-color: #f0f0f0;
}

// src/index.js
import './styles.css';
```

`Step 4:` Run webpack
Run the webpack build to see it in action:

```bash
npm run build
```

This will process your CSS or Sass files and include them in the output bundle.

`Additional Notes:`
If you haven't already, make sure you have the Babel configuration and loader set up for handling JavaScript files.

```bash
npm install babel-loader @babel/core @babel/preset-env --save-dev
Update the webpack configuration to include the Babel loader:
```

```javascript
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
},
```

With these configurations, you should be able to handle CSS and Sass files in your webpack project.

## Cache Busting

Certainly, Boss! Cache busting is a technique used to ensure that the browser always fetches the latest version of a file by changing its filename whenever its content changes.

Starting from webpack 4, content hashing is supported by default using the [contenthash] placeholder. The MiniCssExtractPlugin can be used for extracting CSS with content hashing.

Here's a simplified version of a webpack configuration with content hashing:

```javascript
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js", // Content hashing for JavaScript files
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Content hashing for CSS files
    }),
  ],
};
```

`In this configuration:`
The output filenames for JavaScript and CSS files include [contenthash], ensuring content-based hashing.
The MiniCssExtractPlugin is used to extract CSS into separate files.
Simply run npm run build to see webpack create hashed files in your dist directory.

Remember, webpack automatically provides content hashing for free, and plugins like MiniCssExtractPlugin take advantage of this feature to ensure cache busting for your assets.
