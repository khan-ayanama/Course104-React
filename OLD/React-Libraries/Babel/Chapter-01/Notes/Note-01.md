# Introduction

Babel is a JavaScript compiler

Used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

Here are main things Babel can do for you:

- Transforms Syntax
- Pollyfill features that are missing in your target enivironment
- Source Code transformation

## Babel Packages

`@babel/core`: Main package to run any babel setup or configuration.
`@babel/cli`: Built-in CLI which can be used to compile files from the command line.
`@babel/preset-env`: This enables to use new and upcoming features which node.js is yet to understand. New features are always new and will probably take time to implement in Node.js by default.
`Installation`:

```bash
    npm install @babel/core @babel/cli @babel/preset-env
```

## BABEL CLI

`Compile FIles:`

```bash
# compile single file
npx babel index.js

# Compile file and define output directory
# we can also use --out-file or -o
npx babel index.js --out-file index-compiled.js

# Compile everytime file changes
# We use --watch or -w
npx babel index.js --watch --out-file index-compiled.js
```

`Compile Directories:`

```bash
# Compile entire directory
# we can use either --out-dir or -d
# It doesn't overwrite compile-dir
npx babel src --out-dir compiled-dir

# Compile entire directory and output as single concatenated file
npx babel src --out-file index-compiled.js
```

## Setup Babel

- Install All required Babel packages

```bash
npm install @babel/core @babel/cli @babel/preset-env
```

- Create a file called .babelrc at the root directory of Project

```js
// .babelrc
{
    "presets":["@babel/preset-env"] // "@babel/env"
}
```

- Open package.json file

```json
// package.json
"scripts":{
    "build":"babel index.js --out-file prd/index.js",
    "start":"npm run buld && nodemon prd/index.js",
    "serve":"node prd/index.js"
}
```
