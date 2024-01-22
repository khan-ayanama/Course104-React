# Babel Configuration

`babel.config.json` --> Project wide configuration.
`.babelrc && package.json` --> File-relative configuration.

# @babel/preset-env

It is a smart preset which automatically manage JS and don't need to micromanage the plugins and presets.

`Installation`

```bash
    npm install --save-dev @babel/preset-env
```

@babel/preset-env takes any target environments you've specified and checks them against its mappings to compile a list of plugins and passes it to Babel.

`.browserlistrc:` It specify's the target of browsers
