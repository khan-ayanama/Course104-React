# Introduction

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

Main features of Babel:

- Transform Syntax.
- Polyfill features
- Source code transformation

Example:

```js
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function (n) {
  return n + 1;
});
```

## Core Library

The core functionality of Babel resides at the @babel/core module. After installing it:

```bash
npm install --save-dev @babel/core
```

## CLI tool

@babel/cli is a tool that allows you to use babel from the terminal. Here's the installation command and a basic usage example

```bash
npm install --save-dev @babel/core @babel/cli

./node_modules/.bin/babel src --out-dir lib
```

## Plugins

Transformations come in the form of plugins, which are small JavaScript programs that instruct Babel on how to carry out transformations to the code

To transform ES2015+ syntax into ES5 we can rely on official plugins like @babel/plugin-transform-arrow-functions

```bash
npm install --save-dev @babel/plugin-transform-arrow-functions

./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

## Preset

Instead of adding all the plugins we want one by one, we can use a "preset" which is just a pre-determined set of plugins.

Just like with plugins, you can create your own presets too to share any combination of plugins you need. For our use case here, there's an excellent preset named env.

```bash
npm install --save-dev @babel/preset-env

./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
```

## Configuration

There are a few different ways to use configuration files depending on your needs.

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        }
      }
    ]
  ]
}
```

Now the env preset will only load transformation plugins for features that are not available in our target browsers

## Polyfill

As of Babel 7.4.0, this package has been deprecated in favor of directly including core-js/stable

The @babel/polyfill module includes core-js and a custom regenerator runtime to emulate a full ES2015+ environment.

## Summary

We used @babel/cli to run Babel from the terminal, @babel/polyfill to polyfill all the new JavaScript features, and the env preset to only include the transformations and polyfills for the features that we use and that are missing in our target browsers.
