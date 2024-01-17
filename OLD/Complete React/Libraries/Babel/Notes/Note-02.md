# Configure Babel

- Project wide configuration: `babel.config.*`
- File-relative configuration `.babelrc.*`

## babel.config.json

Create a file called babel.config.json with the following content at the root of your project (where the package.json is).

```json
{
  "presets": [...],
  "plugins": [...]
}
```

## babelrc.json

Create a file called .babelrc.json with the following content in your project.

```json
{
  "presets": [...],
  "plugins": [...]
}
```

## package.json

Alternatively, you can choose to specify your .babelrc.json config from within package.json using the babel key like so:

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```

## JavaScript configuration files

You can also write babel.config.js (like we're doing), and .babelrc.js files using JavaScript:

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
```

You are allowed to access any Node.js APIs, for example a dynamic configuration based on the process environment

```js
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

## Using API (@babel/core)

```JavaScript
require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-transform-arrow-functions"],
});
```

## Note

In other words, babel.config.json is overwritten by .babelrc, and .babelrc is overwritten by programmatic options.
