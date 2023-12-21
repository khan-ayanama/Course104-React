# Configuration

The .eslintrc.json file is a configuration file used by ESLint, a popular static code analysis tool for JavaScript. This file allows developers to specify rules, configurations, and settings for ESLint to use when analyzing and linting their JavaScript code. The name follows the convention of having a filename starting with a dot (.), indicating that it is a configuration file.

Here's a breakdown of the key components in the .eslintrc.json file:

`File Location:`
The .eslintrc.json file is typically placed in the root directory of a JavaScript project.
It can also be part of a shared configuration package or located in specific project folders, depending on your project structure.

`File Format:`
The configuration file is written in JSON (JavaScript Object Notation), a lightweight data interchange format.
JSON provides a structured way to define ESLint settings, rules, and options.

`Configuration Settings:`
Inside the .eslintrc.json file, you define ESLint configuration settings using key-value pairs.
Settings can include rules, parser options, environments, plugins, and more.

`Example .eslintrc.json File:`

```json
    {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "semi": ["error", "always"]
    }
    }
```

In this example, the configuration specifies that the code is intended to run in both browser and Node.js environments (env), extends the recommended ESLint rules (extends), and sets some specific rules for indentation, quotes, and semicolons (rules).

`Extending Configurations:`
The "extends" property allows you to extend existing ESLint configurations or share configurations with other projects.
For example, you can extend from popular presets like "eslint:recommended" or use custom configurations.

`Rule Configuration:`
The "rules" property allows you to customize ESLint rules according to your project's coding standards.
Each rule is specified as a key-value pair where the key is the rule name, and the value defines the rule's behavior.

`Comments in Configuration:`
You can add comments within the JSON file using standard JavaScript comment syntax (// or /**/) to provide explanations or context for specific configurations.
Configuring ESLint using .eslintrc.json allows you to enforce coding styles, catch potential issues, and improve code quality within your JavaScript project. Adjust the settings based on your project's requirements and coding standards.

## ESLint configuration file (.eslintrc)

When adding rules to an ESLint configuration file, you are specifying the coding standards and behaviors you want ESLint to enforce in your JavaScript code. Here's a breakdown of how to add rules to an ESLint configuration file, such as .eslintrc.json:

### Basic Rule Configuration

**Open the .eslintrc.json File:**
Open the configuration file in your preferred text editor.

`Add a "rules" Section:`
If it doesn't already exist, add a "rules" section to your configuration file. This is where you'll define individual rules and their configurations.

```json
    {
    "rules": {
        // Rules will be added here
    }
    }
```

`Specify Rules:`
Specify individual rules as key-value pairs within the "rules" section.

```json
    {
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        // Add more rules as needed
    }
    }
```

In this example, the rules for enforcing a semicolon at the end of statements (semi) and using single quotes for strings (quotes) are defined.

**Rule Configuration Format:**

`Rule Severity:`
Rules can have severity levels: "off" (turns the rule off), "warn" (issues a warning), or "error" (raises an error).

`Rule Options:`
Some rules accept additional options. For example, the "indent" rule may take an array specifying the number of spaces for indentation.

```json
    {
    "rules": {
        "indent": ["error", 2],
        // Add more rules as needed
    }
    }
```

`Example:`
Here's an extended example:

```json
    {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-unused-vars": "warn",
        "no-console": ["error", { "allow": ["warn", "error"] }]
        // Add more rules as needed
    }
    }
```

In this example:

* `"no-unused-vars"` is set to "warn", meaning it will issue a warning if there are unused variables.
* `"no-console"` is configured to disallow the use of console.log() but allows console.warn() and console.error().
`Rule Documentation:`
When adding or modifying rules, it's essential to refer to the ESLint documentation for each rule to understand its purpose and available configurations. The official ESLint rules documentation can be found here: ESLint Rules

Adjust the rules in your configuration file based on your project's coding standards and requirements.

## esLint with package.json

```json
    {
    "scripts": {
        "lint": "eslint .",
        "lint": "eslint src --fix"
    },
    "devDependencies": {
        "eslint": "^7.0.0"
    }
    }
```

## When you want to restrict some libraries to not import from node_module folder which provides same functionality eg:(lodash & underscore)

```json
    {
    "rules": {
        "no-restricted-imports": [
        "error",
        {
            "paths": [
            {
                "name": "node_modules",
                "message": "Direct imports from 'node_modules' are not allowed. Please import the specific module instead."
            }
            ],
            "patterns": [
            "!node_modules/*"
            ]
        }
        ]
    }
    }
```

* `"error"` sets the rule to raise an error if violated.
* `"paths"` specifies the directory or module name to restrict, in this case, "node_modules."
* `"patterns"` is an array of patterns to exempt from the rule, allowing import statements that match the specified pattern. In this case, it allows any import that doesn't start with "node_modules/."
