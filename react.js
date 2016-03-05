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
        "jsx-quotes": [1, "prefer-double"],

        "react/display-name": 1,
        "react/forbid-prop-types": 0,
        "react/no-danger": 2,
        "react/no-deprecated": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-direct-mutation-state": 2,
        "react/no-is-mounted": 2,
        "react/no-multi-comp": 1,
        "react/no-set-state": 0,
        "react/no-string-refs": 2,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 0,
        // "react/prefer-stateless-function": 2,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 1,
        "react/require-extension": 0,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/sort-prop-types": [2, { "ignoreCase": true, "callbacksLast": true, "requiredFirst": true}],
        "react/wrap-multilines": 1,

        /* JSX Specific values */
        "react/jsx-boolean-value": [2, "never"],
        "react/jsx-closing-bracket-location": [1, {"location": "after-props"}],
        "react/jsx-curly-spacing": [2, "never"],
        "react/jsx-equals-spacing": [2, "never"],
        "react/jsx-handler-names": [1, {
            "eventHandlerPrefix": "handle",
            "eventHandlerPropPrefix": "on"
        }],
        "react/jsx-indent-props": [1, 4],
        "react/jsx-indent": 1,
        "react/jsx-key": 2,
        "react/jsx-max-props-per-line": 0,
        "react/jsx-no-bind": 0,
        "react/jsx-no-duplicate-props": [2, {
            "ignoreCase": true
        }],
        "react/jsx-no-literals": 0,
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-sort-props": 0,
        "react/jsx-space-before-closing": [1, "never"],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 1
    }
}
