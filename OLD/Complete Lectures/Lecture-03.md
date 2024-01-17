# Notes - 03

## Babel

Babel is a javascript package that will turn the ES6 code into older version to support older browser  
Babel comes along with parcel

## Tree Shaking

Parcel provides Tree Shaking which Removing unnecessary code

## Shortcuts

Writing longer command in the command line requires effort so to minimize the effort we can add the command to package.json file and assign it the shorter name

```js
    "scripts": {
    "start": "npx parcel index.html",
    "build": "npx parcel build index.html",
    "test": "jest"
  }
```

Then we can write the command in shorter format like below

```cli
    npm run start or npm run
    npm run build
```

## NPM vs NPX

NPM by itself doesn’t run any packages. If you want to run a package using npm, you must specify that package in your package.json file.  

npx is also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry.

## To remove console.log()

In order to minify and compress the code we also need to remove console.log() parcel doesn't do it so we need to install extra plugin of babel in order to do that

1. You need to install babel-plugin-transform-remove-console in Developer mode

2. In CLI run command

    ```git
        npm install babel-plugin-transform-remove-console --save-dev
    ```

3. Create a file name .babelrc inside main directory

4. Add json code provided by webiste in it

    ```json
        "plugins": [ ["transform-remove-console", 
        { "exclude": [ "error", "warn"] }] ]
    ```

Note: It will also remove the console.log in the console of browser so while developing remove it

## Use of key in React

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

## JSX

JSX is not HTML inside Javascript, It is HTML like syntax.  
JSX sanitizes the malicious data fetched by API.

## Difference between JSX & HTML

## How JSX execute

JSX => React.CreateElement() (converted by babel) => Object => HTML(DOM)

## Components

Everything is component in React

Component are of two types:-

1. Functional Component
2. Class based Component

In functional component we should write the first letter as capital letter, It's not mandatory  

Example of functional component:

```js
    const MyComponent = () => {
        return <h1>My first Component</h1>;
    }
```

## Functional Component example

Functional component with JSX

```js
    import React from "react";
    import ReactDOM from "react-dom/client";

    // This is JSX
    const Title = <h1>Title of Page</h1>;

    const SampleFunc = () => <h2>Sample Function test!!</h2>;

    // Functional component

    function MyFunc() {
    return (
        <div>
        {Title}
        {SampleFunc()}
        <SampleFunc />
        <h2>Hello world!</h2>
        </div>
    );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));

    // Rendering function
    root.render(<MyFunc />);
```

Note: You've to return the functional component in div or <React.Fragment>Child</React.Fragment>

## <React.Fragment>

Using <React.Fragment> or the shorthand <>...</> helps keep your DOM structure clean and avoids unnecessary nesting when you don't want to introduce additional elements just for the sake of wrapping.

## HTML vs JSX

In JSX we generally use camelcase attribute and inline styles in double curly braces {{}} etc for more visit below site  

[HTML vs JSX on Freecodecamp.org](https://www.freecodecamp.org/news/html-vs-jsx-whats-the-difference/)

## Rendering Components

React for building user interfaces, these three syntax variations are used to render components:

`{TitleComponent}`: This syntax is used to render the TitleComponent as a self-closing tag without any children. It's typically used when the component doesn't have any content or children elements to render.

`{<TitleComponent/>}`: This syntax is also used to render the TitleComponent as a self-closing tag, and it's functionally equivalent to the first syntax. It's a matter of personal preference which one you use.

`{<TitleComponent></TitleComponent>}:` This syntax is used to render the TitleComponent with an opening and closing tag, allowing you to include children elements or content inside the component. This is used when you want to pass content or other JSX elements as children to the TitleComponent.

## Benefits of JSX

`XSS` - Cross site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website. Attackers often initiate an XSS attack by sending a malicious link to a user and enticing the user to click it.

JSX takes care of XSS.

## Inline CSS in REACT

In React, you can use inline styles directly within JSX by passing a JavaScript object with camelCased versions of the CSS property names. Here's an example of how you can apply inline styles in a React component:

```jsx
    import React from 'react';

    const MyComponent = () => {
    const divStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
        borderRadius: '5px'
    };

    return (
        <div style={divStyle}>
        Hello, Boss! This text is styled using inline CSS in React JSX.
        </div>
    );
    };
    export default MyComponent;
```

In this example, the divStyle object contains CSS properties and their corresponding values. These styles are applied directly to the `<div>` element using the style attribute in JSX.

The keys in the divStyle object are camelCased versions of the CSS property names (backgroundColor instead of background-color, borderRadius instead of border-radius, etc.).

Remember that the values for the styles are strings, and you need to use camelCase for property names as opposed to the hyphenated style you might be used to in regular CSS.

This approach allows you to dynamically compute styles based on component state or props, making it a powerful way to style your React components

## FAQ

```txt
    Running Notes of @akshaymarch7  's session on 01-01-2023:

    Writing Scripts in package.json.

    *Q. What converts New Code to Older Code(For older version Browsers)? 
    A: Babel 
    We do not need to write polyfill. Babel does it automatically.

    npx - executing commands without downloading packages
    npm - will download required packages

    Note: Parcel will not remove console.log automatically. We need to configure for it. There is a package for it, named 'babel-plugin-transform-remove-console' either from babel website or npmjs website: npm install babel-plugin-transform-remove-console --save-dev /-D

    Usage: 1.via .babelrc (recommended)
        2. via CLI
        3. via NodeAPI

    React-key Reconciliation :
    When there are siblings in an array, we need to give keys for each sibling
    HW: Read about React-key Reconciliation from React Docs.

    React.createElement gives us an Object, which is then converted to html and puts into DOM
    JSX uses React.createElement (behind the scenes), which gives Object, and then into HTML, and it is put into DOM
    Babel does it. Babel converts JSX. JSX was developed by Facebook.
    Babel is must to use JSX.

    Q. Is JSX HTML inside JS? No. 
    A: JSX is a HTML like Syntax, and not HTML inside JS.

    Babel: Compiler for JS.
    Read Babel Docs: babeljs.io
    Play with Babel in it's website.
    Babel comes along with Parcel.

    Also Go to it's GitHub Repo, and read about its algorithms.

    React Component:
    2 Types:
    1. Functional Component- NEW
    2. Class Based Component - OLD

    Functional Comp is just a normal function that returns some piece of JSX, or a react element, or a function. 

    Name of a Component starts with a Capital Letter (not mandatory, but good practice to use)

    If we have to write multiple lines to be returned in a component, we need to use ()and ; at the end.

    For Homework, use Normal Convention.

    Continued... Part 2

    Hope it was Helpful ??
    Notes Part 2:

    Diff b/n React Element & React Component:

    React Element is returning an Object.
    React Component is a function that returns JSX, or a react element, or a function.

    Syntax When rendering:
    For React Element, We use root.render(element_name);
    For React Component, We use Angular brackets: root.render(<ComponentName />);

    Any piece of Javascript code can be written within {} 

    XSS - Cross site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website. Attackers often initiate an XSS attack by sending a malicious link to a user and enticing the user to click it.

    JSX takes care of XSS.

    *Interview Q: Component Composition:
    A: Writing/ Passing component inside component.

    Home Work:
    1. Read about React-key Reconciliation from React Docs.
    2. Do Whatever Akshay did in the Session.

    *

    Hope it was Helpful ??
```
