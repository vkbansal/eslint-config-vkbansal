# ESLint Shareable Config

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)

## Install

```bash
npm install eslint-config-vkbansal
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

Then, add this to your .eslintrc file:

```
{
  "extends": ["vkbansal"]
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.


### React/JSX
This package also includes a shareable config to be used with `React` or `JSX`. Just add this to your .eslintrc file:

```
{
  "extends": ["vkbansal", "vkbansal/react"]
}
```

## License

MIT. Copyright (c) [Vivek Kumar Bansal](http://vkbansal.me).
