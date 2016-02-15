"use strict";

module.exports = {
    "plugins": [
        "jsx-control-statements"
    ],
    "ecmaFeatures": {
        "jsx": true
    },
    "rules": {
        "jsx-control-statements/jsx-choose-not-empty": 1,
        "jsx-control-statements/jsx-for-require-each": 1,
        "jsx-control-statements/jsx-for-require-index": 1,
        "jsx-control-statements/jsx-for-require-of": 1,
        "jsx-control-statements/jsx-for-single-child": 0,
        "jsx-control-statements/jsx-if-require-condition": 1,
        "jsx-control-statements/jsx-if-single-child": 0,
        "jsx-control-statements/jsx-otherwise-once-last": 1,
        "jsx-control-statements/jsx-use-if-tag": 1,
        "jsx-control-statements/jsx-when-require-condition": 1
    }
};
