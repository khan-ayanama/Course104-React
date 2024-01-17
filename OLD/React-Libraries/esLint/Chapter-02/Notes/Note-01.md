# Chapter-02

## Abstract Syntax Tree (AST)

* AST is nothing but the javascript Ojbect that describes the code.
* Tools that uses the AST are:
  * Webpack
  * Linters
  * Babel.js
  * Minifiers
  * Syntax Highlighters
* ESLint use the ESPree JS Parser
* ESpree converts js code to AST

## Custom rules in esLint

Creating a custom rule in ESLint involves defining a new rule in a custom ESLint plugin. Here's a basic example of how you might create a custom rule to enforce a specific coding convention.

Let's say you want to enforce a naming convention where all variables should be in camelCase, and you want ESLint to flag any variable that doesn't follow this convention.

`Create a custom ESLint plugin:`
Start by creating a new directory for your ESLint plugin and initializing a package.json file.

```bash
    mkdir eslint-plugin-custom
    cd eslint-plugin-custom
    npm init -y
```

`Install ESLint as a peer dependency:`

```bash
    npm install --save-dev eslint
```

`Create the custom rule:`
Inside your plugin directory, create a new file for your rule. Let's call it camel-case.js.

```javascript
    module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
        description: 'Enforce camelCase variable naming',
        category: 'Stylistic Issues',
        recommended: true,
        },
        fixable: 'code',
    },
    create: function (context) {
        return {
        VariableDeclarator(node) {
            const { id } = node;

            if (id && id.name && !id.name.match(/^[a-z][a-zA-Z]*$/)) {
            context.report({
                node,
                message: 'Variable names must be in camelCase',
                fix: function (fixer) {
                return fixer.replaceText(id, id.name.replace(/^[A-Z]/, (c) => c.toLowerCase()));
                },
            });
            }
        },
        };
    },
    };
```

This simple rule checks each variable declaration and reports an error if the variable name is not in camelCase. It also provides an automatic fix by converting the variable name to camelCase.

`Configure ESLint to use your custom rule:`
Create an .eslintrc.js file in the root of your project:

```javascript
    module.exports = {
    plugins: ['custom'],
    rules: {
        'custom/camel-case': 'error',
    },
    };
```

Make sure that your custom ESLint plugin is listed as a plugin and then enable your custom rule in the rules section.

`Run ESLint:`
Run ESLint to see your custom rule in action:

```bash
    npx eslint your-file.js
```

This is a basic example to get you started. Depending on your specific requirements, you might need to enhance or modify the rule accordingly. Keep in mind that ESLint's API and rule creation process can be quite flexible, allowing you to implement a wide range of custom rules based on your needs.

## Custom rule to parse the comment

If you want to create a custom ESLint rule to enforce a specific format for comments, you can do that. Let's say you want to enforce a rule where comments must start with a specific prefix, like TODO:. Here's an example:

`Create a custom ESLint plugin:`
Start by creating a new directory for your ESLint plugin and initializing a package.json file.

```bash
    mkdir eslint-plugin-custom-comments
    cd eslint-plugin-custom-comments
    npm init -y
```

`Install ESLint as a peer dependency:`

```bash
    npm install --save-dev eslint
```

`Create the custom rule:`
Inside your plugin directory, create a new file for your rule. Let's call it comment-prefix.js.

```javascript
    module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
        description: 'Enforce a specific prefix for comments',
        category: 'Stylistic Issues',
        recommended: true,
        },
        fixable: 'code',
    },
    create: function (context) {
        return {
        Program(node) {
            const comments = context.getSourceCode().getAllComments();

            comments.forEach((comment) => {
            const text = comment.value.trim();
            const prefix = 'TODO:';

            if (text.startsWith(prefix)) {
                return;
            }

            context.report({
                loc: comment.loc,
                message: `Comments must start with the prefix '${prefix}'`,
                fix: function (fixer) {
                const range = comment.range;

                return fixer.replaceTextRange(range, `${prefix} ${text}`);
                },
            });
            });
        },
        };
    },
    };
```

This rule checks each comment in the code and reports an error if the comment does not start with the specified prefix (TODO:). It also provides an automatic fix by adding the prefix to the comment.

`Configure ESLint to use your custom rule:`
Create an .eslintrc.js file in the root of your project:

```javascript
    module.exports = {
    plugins: ['custom-comments'],
    rules: {
        'custom-comments/comment-prefix': 'error',
    },
    };
```

Make sure that your custom ESLint plugin is listed as a plugin, and then enable your custom rule in the rules section.

`Run ESLint:`
Run ESLint to see your custom rule in action:

```bash
    npx eslint your-file.js
```

This is just a basic example. Depending on your specific requirements, you may need to modify the rule accordingly. Feel free to customize the rule based on the specific comment format you want to enforce.

## Send Arguments to the custom rule

To send arguments to custom rules in ESLint, you can pass configuration options when you define your rule in the .eslintrc.js file. Let's modify the previous example to accept a custom prefix as an argument:

`Update the custom rule:`
Modify the comment-prefix.js file to accept configuration options.

```javascript
    module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
        description: 'Enforce a specific prefix for comments',
        category: 'Stylistic Issues',
        recommended: true,
        },
        fixable: 'code',
        schema: [
        {
            type: 'object',
            properties: {
            prefix: {
                type: 'string',
                default: 'TODO:',
            },
            },
            additionalProperties: false,
        },
        ],
    },
    create: function (context) {
        const options = context.options[0] || {};
        const prefix = options.prefix || 'TODO:';

        return {
        Program(node) {
            const comments = context.getSourceCode().getAllComments();

            comments.forEach((comment) => {
            const text = comment.value.trim();

            if (text.startsWith(prefix)) {
                return;
            }

            context.report({
                loc: comment.loc,
                message: `Comments must start with the prefix '${prefix}'`,
                fix: function (fixer) {
                const range = comment.range;

                return fixer.replaceTextRange(range, `${prefix} ${text}`);
                },
            });
            });
        },
        };
    },
    };
```

Now the rule accepts an optional configuration object with a prefix property. If not provided, it defaults to 'TODO:'.

`Configure ESLint with custom options:`
Update your .eslintrc.js file to include the custom prefix:

```javascript
    module.exports = {
    plugins: ['custom-comments'],
    rules: {
        'custom-comments/comment-prefix': ['error', { prefix: 'CUSTOM:' }],
    },
    };
```

Here, you're specifying the custom prefix as an option when enabling the rule.

`Run ESLint:`
Run ESLint to see your custom rule with the specified prefix in action:

```bash
    npx eslint your-file.js
```

This way, you can pass arguments or configuration options to your custom rules in ESLint based on your specific requirements. Adjust the schema and handling in your rule accordingly.

## Fixing ESLint problems with --fix option

If you want to add a fix to your custom ESLint rule, you can use the fix property in the context.report method. I've already included this in the previous examples, but let me provide a brief explanation.

Here's the relevant part of the custom rule with the fix property:

```javascript
    context.report({
    loc: comment.loc,
    message: `Comments must start with the prefix '${prefix}'`,
    fix: function (fixer) {
        const range = comment.range;

        return fixer.replaceTextRange(range, `${prefix} ${text}`);
    },
});
```

In this example:

context.report is used to report an issue detected by the rule.
loc specifies the location of the reported issue.
message provides a description of the issue.
fix is a function that takes a fixer object as a parameter. The fixer object provides methods to make changes to the code.
The fix function is responsible for describing how to fix the reported issue. In this case, it uses fixer.replaceTextRange to replace the existing text with the corrected version.

When ESLint is run with the --fix option, it automatically applies the fixes suggested by the custom rule. For example:

```bash
    npx eslint --fix your-file.js
```

This command will apply the fix to the file, updating the comments to start with the specified prefix.

Ensure that your rule is designed to handle fixes correctly and safely. The fix property is optional, and not all rules may have a fix associated with them. Always thoroughly test your custom rule, especially when it includes a fix, to avoid unintended changes to the code.
