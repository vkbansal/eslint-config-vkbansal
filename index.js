"use strict";

module.exports = {
    "ecmaFeatures": {
        "arrowFunctions": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "restParams": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true
    },
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        /**
         * Possible Errors
         */
        "comma-dangle": [2, "never"],
        "no-cond-assign": [2, "except-parens"],
        "no-console": 1,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty": 2,
        "no-ex-assign": 0,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": [2, "functions"],
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-jsdoc": 1,
        "valid-typeof": 2,
        /**
         * Best Practices
         */
        "accesor-pairs": 0,
        "block-scoped-var": 2,
        "complexity": 0,
        "consistent-return": 0,
        "curly": [2, "multi-line"],
        "default-case": 0,
        "dot-location": 0,
        "dot-notation": [2, {
            "allowKeywords": true,
            "allowPattern": "^[a-z]+(_[a-z]+)+$"
        }],
        "eqeqeq": 2,
        "guard-for-in": 2,
        "no-alert": 1,
        "no-caller": 2,
        "no-div-regex": 0,
        "no-else-return": 2,
        "no-empty-label": 2,
        "no-empty-pattern": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-implicit-coercion": 2,
        "no-implied-eval": 2,
        "no-invalid-this": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-magic-numbers": 0,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-native-reassign": [2, {"exceptions": ["Map"]}],
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-octal-escape": 2,
        "no-octal": 2,
        "no-param-reassign": [2, {"props": true}],
        "no-process-env": 0,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-return-assign":2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unused-expressions": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-void": 2,
        "no-warning-comments": 1,
        "no-with": 2,
        "radix": 2,
        "vars-on-top": 0,
        "wrap-iife": [2, "inside"],
        "yoda": 0,
        /**
         * Strict
         */
        "strict": [2, "global"],
        /**
         * Variables
         */
        "init-declarations": 0,
        "no-catch-shadow": 0,
        "no-delete-var": 2,
        "no-label-var": 2,
        /*"no-shadow-resticted-names": 2,*/
        /*"no-shadow": [2, {
            "builtinGlobals": true,
            "hoist": "all"
        }],*/
        "no-undef-init": 2,
        "no-undef": 2,
        "no-undefined": 2,
        "no-unused-vars": 2,
        "no-use-before-define": 2,
        /**
         * Node.js and CommonJS
         */
        "callback-return": 0,
        "global-require": 1,
        "handle-callback-err": 0,
        "no-mixed-requires": [1, {"grouping": true}],
        "no-new-require": 0,
        "no-path-concat": 2,
        "no-process-exit": 0,
        "no-restricted-modules": 0,
        "no-sync": 0,
        /**
         * Stylistic Issues
         */
        "array-bracket-spacing": [1, "never"],
        "block-spacing": [2, "always"],
        "brace-style": [1, "1tbs", { "allowSingleLine": true }],
        "camelcase": [1, {"properties": "never"}],
        "comma-spacing": [1, {"before": false, "after": true}],
        "comma-style": [1, "last"],
        "computed-property-spacing": [1, "never"],
        "consistent-this": [1, "that"],
        "eol-last": 2,
        "func-names": 0,
        "func-style": 0,
        "id-length": 0,
        "id-match": 0,
        "indent": [2, 4, {
            "SwitchCase": 1,
            "VariableDeclarator": { "var": 1, "let": 1, "const": 1}
        }],
        "key-spacing": [1, {"beforeColon": false, "afterColon": true}],
        "linebreak-style": [2, "unix"],
        "lines-around-comment": 1,
        "max-depth": 1,
        "max-len": 0,
        "max-nested-callbacks": 0,
        "max-params": [1, 4],
        "max-statements": 1,
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": false
        }],
        "new-parens": 2,
        "newline-after-var": [1, "always"],
        "no-array-constructor": 2,
        "no-bitwise": 0,
        "no-continue": 0,
        "no-inline-comments": 0,
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": [2, {"max": 2}],
        "no-negated-conditions": 1,
        "no-nested-ternary": 0,
        "no-new-object": 2,
        "no-plusplus": 0,
        "no-restricted-syntax": 0,
        "no-spaced-func": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0,
        "no-unneeded-ternanry": 2,
        "object-curly-spacing": 0,
        "one-var": [1, "always"],
        "operator-assignment": [2, "always"],
        "operator-linebreak": [1, "before"],
        "padded-blocks": [2, "never"],
        "quote-props": [2, "as-needed", { "keywords": true, "unnecessary": false }],
        "quotes": 0,
        "require-jsdoc": 0,
        "semi-spacing": [2, {"before": false, "after": true}],
        "semi": [2, "always"],
        "sort-vars": 0,
        "space-after-keywords": [2, "always"],
        "space-before-blocks": 2,
        "space-before-function-paren": [1, {
            "anonymous": "never",
            "named": "never"
        }],
        "space-before-keywords": [2, "always"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-return-throw-case": 2,
        "space-unary-ops": [2, {"words": true, "nonwords": false}],
        "spaced-comment":  [2, "always", { "block": { "exceptions": ["-"] } }],
        "wrap-regex": 2,
        /**
         * ECMAScript 6
         */
         "arrow-body-style": [1, "as-needed"],
         "arrow-parens": [1, "always"],
         "arrow-spacing": [1, {"before": true, "after": true}],
         "constructor-super": 2,
         "generator-star-spacing": [2, {"before": false, "after": true}],
         "no-arrow-condition": 1,
         "no-class-assign": 2,
         "no-const-assign": 2,
         /*"no-dupe-class-memnbers": 2,*/
         "no-this-before-super": 2,
         "no-var": 1,
         "object-shorthand": [1, "always"],
         "prefer-arrow-callback": 1,
         "prefer-const": 0,
         "prefer-reflect": 0,
         "prefer-spread": 1,
         "prefer-template": 1,
         "require-yield": 2
    }
}
