# Introduction

ESLint is the most popular javascript linter.
The term lint, or a linter, is a static code analysis tool  used to flag programming errors, bugs, stylistic errors and suspicious constructs.

Javascript is a great language that it gives you a lot of freedom to write code sometimes it may go bad and it also is a dynamic language and loosely typed. Eslint is a very helpful in these scenarios.

## Example

```js
    function checkPositive(number){
        var x = 3;
        if (number>0){
            return true;
        }
    }
    checkPositive(3)
```

Here are the problems in above code:

* The function returns only when number is positive what about the number which are negative. It doesn't handle edge cases.
* Variable x is defined but not used in the code.
* The code works but it will through error in edge scenaros.
  
ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continous intergration pipeline.

Many problems ESLint finds can be automatically fixed using the --fix option.

## Installing and Runnign ESLint

* ESLint uses Espree for js parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.
* In order to install the ESLint in your application, you need Node.js.
* To install ESLint globally we use command `npm install eslint -g`
* To install locally in application `npm install eslint --save-dev`
* To check whether the esling version. WE use esling -v.
