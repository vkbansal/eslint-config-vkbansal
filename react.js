"use strict";

module.exports = {
    "plugins": [
        "react"
    ],
    "ecmaFeatures": {
        "jsx": true
    },
    "rules": {
        "jsx-quotes": 0,

        "react/display-name": 1,
        "react/forbid-prop-types": 0,
        "react/jsx-boolean-value": [2, "never"],
        "react/jsx-closing-bracket-location": [1, {"location": "after-props"}],
        "react/jsx-curly-spacing": [2, "never"],
        "jsx-handler-names": [1, {
            "eventHandlerPrefix": "handle",
            "eventHandlerPropPrefix": "on"
        }],
        "react/jsx-indent-props": [1, 4],
        "react/jsx-key": 2,
        "react/jsx-max-props-per-line": 0,
        "react/jsx-no-duplicate-props": [2, {
            "ignoreCase": true
        }],
        "react/jsx-no-literals": 0,
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 1,
        "react/jsx-quotes": [2, "double"],
        "react/jsx-sort-prop-types": [2, { "ignoreCase": true }],
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 1,
        "react/no-danger": 2,
        "react/no-did-mount-set-state": [1, "allowed-in-func"],
        "react/no-did-update-set-state": 1,
        "react/no-multi-comp": 1,
        "react/no-set-state": 1,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 1,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 1,
        "react/require-extension": 0,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/wrap-multilines": 1
    }
}
