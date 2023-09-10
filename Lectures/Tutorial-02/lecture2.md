# Day2

## Javascript Libraries

### 1. Underscore.js

Underscore.js is a lightweight and superficial JavaScript library, that is not a complete framework but facilitates utility functions for a variety of cases in our common programming chore. Underscore.js comprises of utilities that can be broadly categorized as:

* Handling the alterations on the arrays.
* Handling the alterations on the objects.
* Handling the alterations on the functions.

## 2. Lodash

Lodash is a popular JavaScript utility library that provides a collection of functions for simplifying and enhancing JavaScript code. It's designed to work with arrays, objects, strings, and functions, offering tools for common programming tasks. Lodash is known for its performance optimizations, making it one of the fastest utility libraries available. It's widely used by developers to streamline and improve their JavaScript code.

### 2. Lodash vs underscore.js

Lodash and Underscore.js are two JavaScript utility libraries that serve similar purposes—they both provide a collection of functions to simplify common programming tasks. However, there are some key differences between the two:

* Performance:

  * Lodash: Lodash is known for its performance optimizations. It's designed to be faster than Underscore.js, particularly for common operations on arrays and objects.
  * Underscore.js: While Underscore.js is still reasonably performant, it may not be as fast as Lodash for certain operations, especially when dealing with large datasets.

* Modularity:

  * Lodash: Lodash is highly modular, allowing you to import only the specific functions you need. This modularity can help reduce the bundle size in web applications, making it more efficient in terms of file size.
  * Underscore.js: Underscore.js is less modular, meaning you typically include the entire library in your project, even if you only need a subset of its functions. This can result in a larger bundle size compared to Lodash.

* Additional Features:

  * Lodash: Lodash offers a more extensive feature set than Underscore.js. It includes functions that Underscore.js lacks, such as deep object cloning (_.cloneDeep), string manipulation, and more advanced array and object manipulation functions.
  * Underscore.js: Underscore.js provides a solid set of basic utility functions but may not have the same breadth of features as Lodash.

* Community and Updates:

  * Lodash: Lodash has a large and active community of developers and is frequently updated. It benefits from ongoing improvements and bug fixes.
  * Underscore.js: Underscore.js, while still maintained, may not see updates as frequently as Lodash. Its development pace has slowed down over time.

* Chaining:

  * Lodash: Lodash introduced a chaining syntax that allows you to chain multiple operations together in a fluent and readable manner.
  * Underscore.js: Underscore.js also supports method chaining, but Lodash's chaining syntax is considered more flexible and robust.

* Community Adoption:

  * Lodash: Lodash gained more popularity and widespread adoption among JavaScript developers, making it a common choice for utility functions in JavaScript projects.
  * Underscore.js: While still used by some developers, Underscore.js has seen a decline in adoption in favor of Lodash and other modern utility libraries.

In summary, both Lodash and Underscore.js offer utility functions to simplify JavaScript development, but Lodash is often preferred for its performance, modularity, additional features, and larger community. However, the choice between them may also depend on your specific project requirements and personal preferences.

## What is Bundler?

A bundler is a development tool that combines many JavaScript code files into a single one and also minify, that is production-ready loadable in the browser.  

## esbuild

ESBuild is an open-source JavaScript bundler and minifier written in Go. It is designed to efficiently bundle and optimize JavaScript, TypeScript, and JSX files for web development projects. ESBuild has gained popularity for its exceptional speed and performance compared to other build tools and bundlers like Webpack or Rollup.

### Here are the key functionalities and features of ESBuild

* Bundling: ESBuild can bundle multiple JavaScript or TypeScript files into a single file. This bundling process can significantly reduce the number of HTTP requests required to load your web application, improving loading times.

* Tree Shaking: ESBuild supports tree shaking, which means it can eliminate dead or unused code from the final bundle. This results in smaller file sizes, reducing the size of your JavaScript bundle.

* Minification: ESBuild can minify JavaScript code, making it more compact and optimized for production. Minification reduces variable and function names to shorter names (e.g., from function calculateTotalPrice to function a). It also removes whitespace and comments.

* Incremental Builds: ESBuild supports incremental builds, which means it can rebuild only the parts of your codebase that have changed since the last build. This feature speeds up development workflows, making it ideal for iterative development.

* Support for JSX and TypeScript: ESBuild seamlessly handles JSX (JavaScript XML) and TypeScript, making it suitable for modern web development using technologies like React and statically-typed JavaScript.

* Plugins: ESBuild offers a plugin system that allows you to extend its functionality. You can use plugins to support different file formats, process CSS, and perform other custom transformations.

* Watch Mode: ESBuild provides a watch mode that automatically rebuilds your code when changes are detected. This feature is essential for an efficient development workflow.

* Sourcemap Generation: ESBuild can generate sourcemaps that help you debug minified and bundled code, making it easier to trace issues back to your original source code.

* ES Module Output: ESBuild can generate output in the form of ES6 modules (ESM), CommonJS, AMD, and SystemJS, allowing you to use different module systems depending on your project's requirements.

* Extensive Performance: ESBuild is known for its incredible speed and efficiency, making it one of the fastest JavaScript bundlers available. This performance is due to its highly optimized Go-based codebase.

ESBuild has become a popular choice for modern JavaScript and TypeScript development due to its speed, efficiency, and comprehensive set of features, making it an excellent tool for building and optimizing web applications.

### Parcel

Parcel is an open-source, zero-config, web application bundler that simplifies the process of building modern web applications. It is designed to be user-friendly and developer-focused, requiring minimal configuration, making it an excellent choice for developers who want to quickly set up and bundle their web projects.

### Here are some key characteristics and features of Parcel

* Zero Configuration: Parcel is known for its zero-configuration approach, meaning you can start using it right away without needing to create complex configuration files. Parcel automatically detects and configures most project settings, reducing the initial setup time.

* Multi-Language Support: Parcel supports various web development languages and frameworks, including JavaScript, TypeScript, CSS, SCSS, LESS, HTML, and more. It can also bundle assets such as images and fonts.

* Automatic Dependency Resolution: Parcel automatically analyzes your project's code to determine its dependencies. This includes JavaScript modules, CSS files, and other assets. This eliminates the need to specify import statements explicitly.

* Hot Module Replacement (HMR): Parcel provides built-in support for Hot Module Replacement, a development feature that allows you to see changes in your code immediately in the browser without having to manually refresh the page.

* Code Splitting: Parcel enables code splitting, which means it can create multiple output bundles, loading only the code needed for a specific page or feature. This can improve application load times and performance.

* Performance Optimization: Parcel optimizes your code for production by minifying and compressing it. This helps reduce the size of your final bundle, making your web application faster to load.

* Plugin System: While Parcel is designed to be zero-config, it offers a plugin system that allows you to extend its functionality when necessary. You can use plugins for tasks like transpiling, linting, and more.

* Built-in Development Server: Parcel includes a development server that serves your project during development. It handles live reloading and other development-related tasks.

* Integration with Popular Frameworks: Parcel can be used with popular JavaScript frameworks and libraries, including React, Vue.js, and Angular. It seamlessly handles their build and development requirements.

* Active Development: Parcel is actively maintained and receives updates to keep it up to date with the latest web development practices and standards.

Parcel's simplicity and ease of use make it an attractive choice for developers who want to focus on coding and building web applications without getting bogged down in complex configuration setup. It's suitable for small to medium-sized projects where simplicity and rapid development are priorities.

## What are Tranformers?  

Transformers enable you to write larger, reusable, blocks of JavaScript code that can be referenced anywhere in the app.  

A transformer is a type of plugin or module that is responsible for processing and transforming source code or other assets during the build process. Transformers are commonly used to perform various tasks on files before they are bundled or served to a web application. These tasks can include:

* Transpilation: Converting source code written in one programming language or version to another. For example, transforming modern JavaScript (ES6+) into an older version of JavaScript that is compatible with a broader range of browsers using a transpiler like Babel.

* Minification: Reducing the size of code or assets by removing whitespace, comments, and unnecessary characters. Minification helps improve the loading speed of web applications by reducing the size of files.

* Linting: Analyzing code for potential errors, code style violations, and best practice adherence. Linters like ESLint or TSLint can identify and report issues in code, helping developers write cleaner and more maintainable code.

* File Type Conversion: Converting assets from one file type to another. For example, converting SASS or LESS files into CSS, or converting image files from one format to another.

* Template Compilation: Processing template files, such as HTML templates or template literals in JavaScript, to generate dynamic content or transform them into static code.

* Static Analysis: Analyzing code to perform optimizations, identify dependencies, or extract metadata. Static analysis can help with tasks like tree shaking, which removes unused code from bundles.

* CSS Preprocessing: Transforming CSS with pre-processors like SASS or LESS into standard CSS that browsers can interpret.

* Code Generation: Generating code dynamically based on certain conditions or input. Code generators can create code for specific tasks or configurations.

* Internationalization (i18n): Transforming code or assets to support different languages and locales in internationalized applications.

Transformers are an essential part of modern build tools and bundlers like Webpack, Rollup, and Vite. They enable developers to automate various tasks that are crucial for optimizing, preparing, and serving web applications efficiently. Transformers are often used through plugins or configuration settings in these build tools to define how source code and assets should be transformed during the build process.

## Tree Shaking in Bundler

Tree shaking is a technique used in modern JavaScript bundlers like Webpack and Rollup to eliminate unused code (or "dead code") from the final bundle. It's especially useful for optimizing the size of the JavaScript files that get sent to the browser.

### Here's how tree shaking works

* Static Analysis: During the bundling process, the JavaScript bundler performs static code analysis on your entire codebase to determine which parts of your code are actually used and which are not. It does this by inspecting the import and export statements in your code.

* Marking Unused Code: The bundler marks the code that is not imported or referenced anywhere in your application as "unused" or "dead code."

* Elimination: Once the unused code is identified, the bundler can safely remove it from the final bundle. This process is called "tree shaking" because it starts from the entry point of your application (the "root" of the code "tree") and "shakes" off the unused branches.

Tree shaking is particularly beneficial for optimizing the size of JavaScript bundles in applications that use modern JavaScript modules (ES6 modules) and rely on third-party libraries or frameworks. It ensures that only the code that is actually used by your application ends up in the bundle, reducing its size and improving load times.  

Here's an example to illustrate tree shaking:

Suppose you have a JavaScript module that looks like this:

```js
    // math.js
    export function add(a, b) {
    return a + b;
    }

    export function subtract(a, b) {
    return a - b;
    }

    export function multiply(a, b) {
    return a * b;
    }
```

If your application only imports and uses the add function:

```js
    // app.js
    import { add } from './math.js';

    const result = add(10, 5);
    console.log(result);
```

When tree shaking is applied during bundling, the subtract and multiply functions are marked as unused or dead code because they are not imported or referenced anywhere in your application. Consequently, these unused functions will be removed from the final bundle, resulting in a smaller bundle size.

Keep in mind that for tree shaking to work effectively, your code should be organized into modules that use ES6 module syntax (import and export). Additionally, the bundler and your build configuration should support tree shaking, which is the case with many modern bundlers.

## What is npm?

npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.

## What is yarn?

Yarn is one of the main JavaScript package managers, developed for the Node. js JavaScript runtime environment. An alternative to the npm package manager

## npm vs yarn

![npm vs yarn](/img.png)

## Caret ^ vs Tilda ~

NPM versions are written using three dots separated numbers the first number from the left shows the major release and the second number from the left shows the minor release and the third number shows the patch release of the package.

````python
    Major.Minor.Patch
 ````

### 1. Tilde (~) notation

* It is used to match the most recent patch version. Tilde ~ notation freezes the major version and minor version. As we know patch updates are bug fixes that’s why we can say ~ notation allows us to automatically accept bug fixes.

* Note: Patch updates are very small security changes in a package that is why the ~version is approximately equivalent to the version.

### 2. Caret (^) notation

* It is used for automatically updating the minor updates along with patch updates.

## Dependency vs DevDependency

### Dependencies

* Packages required by your application in production.

### DevDependencies

* Packages that are only needed for local development and testing.

## Package-lock.json

package-lock. json is a file that is automatically generated by npm when a package is installed. It records the exact version of every installed dependency, including its sub-dependencies and their versions.

## crossorigin and integrity

### cross-origin

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

### integrity

The integrity attribute allows a browser to check the fetched script to ensure that the code is never loaded if the source has been manipulated.

## What is Parcel?

Parcel. js is an open-source bundler. It supports many popular languages like Typescript and SASS, and can also handle file types like images and fonts. Parcel comes with a few extra tools built-in: a development server, diagnostics, minification, and even image compression.

## Igniting a First App

1.First initialize a project and create the package. json file by the command.  

```html
    npm init /
    npm init -y
```

2.Answer the question of command line

```node
package name: (day2)
version: (1.0.0)
description: 'This is Day2'
entry point: (index.js)
test command: jest
git repository:
keywords:
author: Ayan Khan

```

3.Install a bundler to ignite our app which is parcel as devDependency

```node
    npm install -D parcel/
    npm install --save-dev parcel
```

* You should add node_modules in .gitignore bcoz we have package-lock.json which can again install each and everything

## Install React and React-DOM

After installing parcel we need to install react and react-dom to ignite our app.

```javascript
    npm i react
    npm install react-dom
```

## To run application

To run application with parcel:

```js
    npx parcel index.html
```

## Import React and ReactDOM in JS file

Before we were using CDN link of React and ReactDom but now we install it in our project so we have to import in our JS file

```js
    import React from "react";
    import ReactDOM from "react-dom/client";
```

In our Index.html file we also have to set the js file of type module because browser doesn't understand import statement in normal js file

```html
    <script type="module" src="App.js"></script>
```

## Parcel along with other packages Properties

* Hot Module Replacement (or HMR) is one of the most useful features offered by webpack/parcel/vite. It allows all kinds of modules to be updated at runtime without the need for a full refresh

* HMR uses File Watcher Algorithm --> written in C++
* It bundles our code
* It MINIFY
* Cleaning our Code
* Handles Dev and Production Build
* Super Fast build Algorithm
* Compresses Image
* Caching while development
* Compressing Code
* Compatible with older version of browser
* It adds polyfills
  * A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
* HTTPS on dev
* Manages port Number
* Consistent Hashing Algorithm
* Zero Config
* Transitive Dependencies --> One package depend upon another dependency

### .parcel-cache folder

* Stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch
* We should put .parcel-cache in .gitignore

### dist folder

The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications

### BUILD

## Browserlist

```json
    "browserlist": [
        "defaults and supports es6-module"
    ]
```
