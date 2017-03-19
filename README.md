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
This package also includes a shareable config to be used with `React` or `JSX`. Just add this to your `.eslintrc` file:

```
{
  "extends": [
    "vkbansal",
    "vkbansal/react",
    "vkbansal/jsx-control-statements"
  ]
}
```

### Differences from eslint-config-airbnb

| Config                                                                      | airbnb-base (11.1.1) | vkbansal (5.0.0) |
| --------------------------------------------------------------------------- | -------------------- | ---------------- |
| [indent](http://eslint.org/docs/rules/indent)                               | 2 spaces             | 4 spaces         |
| [eqeqeq](http://eslint.org/docs/rules/eqeqeq)                               | ignore for null      | always           |
| [no-empty-function](http://eslint.org/docs/rules/no-empty-function)         | allow `arrowFunctions`, `functions` and `methods` | allow only `arrowFunctions`|
| [no-eq-null](http://eslint.org/docs/rules/no-eq-null)                       | off                  | error            |
| [no-implicit-coercion](http://eslint.org/docs/rules/no-implicit-coercion)   | off                  | error            |
| [no-warning-comments](http://eslint.org/docs/rules/no-warning-comments)     | off                  | warn             |
| [require-await](http://eslint.org/docs/rules/require-await)                 | off                  | error            |
| [wrap-iife](http://eslint.org/docs/rules/wrap-iife)                         | outside              | inside           |
| [yoda](http://eslint.org/docs/rules/yoda)                                   | off                  | error            |
| [comma-dangle](http://eslint.org/docs/rules/comma-dangle)                   | always-multiline     | never            |
| [no-constant-condition](http://eslint.org/docs/rules/no-constant-condition) | warn                 | error            |
| [no-extra-parens](http://eslint.org/docs/rules/no-extra-parens)             | off                  | error            |
| [no-constant-condition](http://eslint.org/docs/rules/no-constant-condition) | warn                 | error            |
| [max-len](http://eslint.org/docs/rules/max-len)                             | 100                  | 120              |
| [no-continue](http://eslint.org/docs/rules/no-continue)                     | error                | off              |
| [no-nested-ternary](http://eslint.org/docs/rules/no-nested-ternary)         | error                | off              |
| [no-plusplus](http://eslint.org/docs/rules/no-plusplus)                     | error                | off              |
| [no-restricted-syntax](http://eslint.org/docs/rules/no-restricted-syntax)   | `ForInStatement`, `ForOfStatement`, `LabeledStatement`, `WithStatement` | `LabeledStatement`, `WithStatement` |
| [template-tag-spacing](http://eslint.org/docs/rules/template-tag-spacing)   | off                  | error            |
| [wrap-regex](http://eslint.org/docs/rules/template-tag-spacing)             | off                  | error            |
| [no-native-reassign](http://eslint.org/docs/rules/no-native-reassign) (deprecated) | off           | N/A              |
| [no-negated-in-lhs](http://eslint.org/docs/rules/no-negated-in-lhs) (deprecated)   | off           | N/A              |
| [no-spaced-func](http://eslint.org/docs/rules/no-spaced-func) (deprecated)         | error         | N/A              |
| [prefer-reflect](http://eslint.org/docs/rules/prefer-reflect) (deprecated)         | off           | N/A              |
| `import/imports-first` (deprecated)                                                | off           | N/A              |

#### React

| Config                                                                              | airbnb (14.1.0)          | vkbansal (5.0.0)       |
| ----------------------------------------------------------------------------------- | ------------------------ | ---------------------- |
| [forbid-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md) | `any`, `array`, `object` | none |
| [jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) |line-aligned | after-props |
| [jsx-handler-names](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md) | off | error         |
| [jsx-indent-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md)   | 2   | 4             |
| [jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)               | 2   | 4             |
| [jsx-indent-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)              | off | error         |
| [no-direct-mutation-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md) | off | error |
| [sort-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-props.md)  | no handler-names | handler-names included |
| [jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) | `.jsx` | `.js` |

#### Import
| Config                                                                                                       | airbnb (14.1.0) | vkbansal (5.0.0) |
| ------------------------------------------------------------------------------------------------------------ | --------------- | ---------------- |
| [named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)                   | off             | error            |
| [default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md)               | off             | error            |
| [namespace](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md)           | off             | error            |
| [no-commonjs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md)       | off             | error            |
| [no-nodejs-modules](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md) | off             | error            |
| [order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)                   | off             | error            |

## License

MIT. Copyright (c) [Vivek Kumar Bansal](http://vkbansal.me).
