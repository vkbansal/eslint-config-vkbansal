"use strict";

module.exports = {
    "plugins": [
        "react"
    ],
    "parserOptions" : {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "jsx-quotes": ["warn", "prefer-double"],

        "react/display-name": "warn",
        "react/forbid-prop-types": "off",
        "react/no-danger": "error",
        "react/no-deprecated": "warn",
        "react/no-did-mount-set-state": ["warn", "allow-in-func"],
        "react/no-did-update-set-state": ["warn", "allow-in-func"],
        "react/no-direct-mutation-state": "error",
        "react/no-is-mounted": "error",
        "react/no-multi-comp": "warn",
        "react/no-set-state": "off",
        "react/no-string-refs": "error",
        "react/no-unknown-property": "warn",
        "react/prefer-es6-class": "off",
        "react/prefer-stateless-function": "warn",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "warn",
        "react/require-extension": "off",
        "react/require-render-return": "error",
        "react/self-closing-comp": "warn",
        "react/sort-comp": "warn",
        "react/sort-prop-types": ["error", { "ignoreCase": true, "callbacksLast": true, "requiredFirst": true}],
        "react/wrap-multilines": "warn",

        /* JSX Specific values */
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-closing-bracket-location": ["warn", {"location": "after-props"}],
        "react/jsx-curly-spacing": ["error", "never"],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-handler-names": ["warn", {
            "eventHandlerPrefix": "handle",
            "eventHandlerPropPrefix": "on"
        }],
        "react/jsx-indent-props": ["warn", 4],
        "react/jsx-indent": "warn",
        "react/jsx-key": "error",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-no-duplicate-props": ["error", {
            "ignoreCase": true
        }],
        "react/jsx-no-literals": "off",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-sort-props": "off",
        "react/jsx-space-before-closing": ["warn", "never"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "warn"
    }
}
