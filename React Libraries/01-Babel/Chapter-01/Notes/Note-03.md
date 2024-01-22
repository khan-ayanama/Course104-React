# Configure Babel

## .babelrc vs babel.config.json vs babal.config.js vs @babel/CLI

When you want to apply configuration to only single part of project use .babelrc and for whole project use babel.config.json

`babel.config.js` --> for older version

```js
module.exports = function (api) {
  api.cache(true);

  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}

// with node api
module.exports = function (api) {
  api.cache(true);

  const presets = [ ... ];
  const plugins = [ ... ];

  if (process.env["ENV"] === "prod") {
    plugins.push(...);
  }

  return {
    presets,
    plugins
  };
}
```

`@babel/cli`

```bash
    babel --plugins @babel/plugin-transform-arrow-functions index.js
```

`@babel/core`

```js
// index.js
require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-transform-arrow-functions"],
});
```

`package.json` You can also add babel congig insdie package.json

```json
"name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
```

## Effective config

`printing config for files`

```bash
BABEL_SHOW_CONFIG_FOR=./src/myComponent.jsx npm start

# priority for printing
babel.config.json < .babelrc < programmatic options from @babel/cli
```
