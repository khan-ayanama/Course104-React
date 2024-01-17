# Installing config from npm

To install and use the ESLint configuration based on Airbnb's style guide, you can follow these steps:

`Install ESLint and the Airbnb config:`

```bash
    npm install eslint eslint-config-airbnb-base --save-dev
```

This will install ESLint and the Airbnb base configuration.

`Create an ESLint configuration file (if you don't have one):`
If you don't already have an ESLint configuration file (.eslintrc.js or .eslintrc.json), you can create one using the following command:

```bash
    npx eslint --init
```

Selecting this option will prompt you with questions to generate a basic ESLint configuration file.

`Extend Airbnb config in your ESLint configuration:`
Open your ESLint configuration file (.eslintrc.js or .eslintrc.json) and extend the Airbnb base configuration. Your configuration file might look like this:

```javascript
module.exports = {
  extends: "airbnb-base",
  // ...other ESLint configurations
};
```

`Install peer dependencies:`
The Airbnb config has some peer dependencies that you need to install. You can use the following command:

```bash
    npx install-peerdeps --dev eslint-config-airbnb-base
```

This command will install the required dependencies.

`Run ESLint:`
After configuring ESLint with the Airbnb base config, you can run ESLint to lint your code. Use the following command:

```bash
    npx eslint .
```

This will lint all files in your project according to the ESLint configuration.

## Create a shareable config file and add it to the multiple packages as an NPM Package

If you want to use the ESLint configuration locally without publishing it on NPM, you can use the npm link approach. Here's how you can do it:

Assuming you have already created the directory for your ESLint configuration package, follow these steps:

`Navigate to your ESLint configuration package:`

```bash
    cd path/to/eslint-config-your-package-name
```

`Create an ESLint configuration file:`
Create an ESLint configuration file in your package directory (e.g., index.js). Configure it to extend the desired configurations:

```javascript
module.exports = {
  extends: ["airbnb-base"],
  // Add any additional rules or configurations here
};
```

`Link your package:`
In your ESLint configuration package directory, run:

```bash
    npm link
```

This will create a symbolic link globally, making the package available for linking in other projects.

`Navigate to your project directory where you want to use the ESLint configuration:`

```bash
    cd path/to/your/project
```

`Link your ESLint configuration package locally:`
Run the following command in your project directory:

```bash
    npm link eslint-config-your-package-name
```

This will link your local ESLint configuration package to your project.

`Create an ESLint configuration file in your project:`
Create an ESLint configuration file in your project (e.g., .eslintrc.js) and extend your local package:

```javascript
// .eslintrc.js
module.exports = {
  extends: "your-package-name",
  // Add any project-specific rules or configurations here
};
```

Now, your project will use the ESLint configuration from your local package.

`Remember to unlink your packages when you no longer need them locally:`
To unlink your ESLint configuration package, go to the package directory and run npm unlink.

To unlink your project from the ESLint configuration package, go to your project directory and run `npm unlink eslint-config-your-package-name.`
