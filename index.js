"use strict";

let assign = require("object-assign");

let eslintConfig = {
    "parserOptions": {
        "ecmaVersion": 7,
        "ecmaFeatures": {
            "impliedStrict": false,
            "experimentalObjectRestSpread": true
        },
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "shared-node-browser": true
    },
    "rules": {}
}

assign(
    eslintConfig.rules,
    require("./rules/possible-errors"),
    require("./rules/best-practices"),
    require("./rules/strict-mode"),
    require("./rules/variables"),
    require("./rules/nodejs-and-commonjs"),
    require("./rules/stylistic-issues"),
    require("./rules/ecmascript-6")
)

module.exports = eslintConfig;
