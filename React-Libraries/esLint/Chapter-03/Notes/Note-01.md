# ESLint Config vs ESLint Plugin

Up to now we have learnt how to create the rules in our applications

If we wnat want to share these rules to other developers of application, how we can do that.

In ESLint we can share two things:

- Share a configuraton
- Share a plugin

A plugin is basically a custom set of rules that you can import and use.

Share a configuration means it just a javascript object that contains configuration settings.

ESlint recommended is the shared config file.
First we load all the config rules from the shared and then override or write out own rules.

Where as Plugin,

- Contains custom rules.
- Also contain config, but doesn't have to.

Load the React plugin from node_modules
Specify which rules to be loaded that are loaded in the plugin.

## Naming Convention

Here are the example of naming convention of config and plugin files.

    * ESLint config: files-eslint-config-*
    * ESLint plugin: files-esling-plugin-*

## Installing plugin and using it

Installing the ESLint plugin for npm involves a few steps. Let me walk you through the process.

`Install ESLint and the ESLint plugin:`
Open your terminal and navigate to your project directory. Run the following command:

    ```bash
        npm install eslint eslint-plugin-{plugin-name} --save-dev
    ```

Replace {plugin-name} with the specific name of the ESLint plugin you want to install. For example, if you want to install the ESLint plugin for React, you would run:

    ```bash

        npm install eslint eslint-plugin-react --save-dev
    ```

Create an ESLint configuration file (if you don't have one):
If you don't already have an ESLint configuration file (usually named .eslintrc.js or .eslintrc.json), you can create one using the following command:

    ```bash
        npx eslint --init
    ```

This command will prompt you with a series of questions to help generate a basic ESLint configuration file.

`Configure ESLint to use the plugin:`
Open your ESLint configuration file (.eslintrc.js or .eslintrc.json) and add the plugin to the plugins section. Also, make sure to configure any plugin-specific rules.

For example, if you've installed the ESLint React plugin, your .eslintrc.js might look like this:

    ```javascript
        module.exports = {
        // ...other ESLint configurations
        plugins: [
            'react',
            // ...other plugins
        ],
        rules: {
            // ...other rules
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            // ...other plugin-specific rules
        },
        };
    ```

Adjust the configuration based on the specific ESLint plugin you've installed and the rules you want to enforce.

`Run ESLint:`
After configuring ESLint with the plugin, you can run ESLint to lint your code. Use the following command:

    ```bash
        npx eslint .
    ```

This will lint all files in your project according to the ESLint configuration.
