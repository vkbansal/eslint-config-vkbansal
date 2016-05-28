module.exports = {
    "array-bracket-spacing": ["warn", "never"],
    "block-spacing": ["warn", "always"],
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["warn", {"properties": "never"}],
    "comma-spacing": ["warn", {"before": false, "after": true}],
    "comma-style": ["warn", "last"],
    "computed-property-spacing": ["warn", "never"],
    "consistent-this": ["warn", "that"],
    "eol-last": "warn",
    "func-names": "off",
    "func-style": "off",
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "indent": ["error", 4, {"SwitchCase": 1, "VariableDeclarator": {"var": 1, "let": 1, "const": 1}}],
    "jsx-quotes": "off",
    "key-spacing": ["warn", {"beforeColon": false, "afterColon": true}],
    "keyword-spacing": ["error", {"before": true, "after": true}],
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "off",
    "max-depth": "warn",
    "max-len": "off",
    "max-nested-callbacks": "off",
    "max-params": ["warn", 4],
    "max-statements": "warn",
    "max-statements-per-line": ["warn", { "max": 1 }],
    "new-cap": ["error", {"newIsCap": true, "capIsNew": false}],
    "new-parens": "error",
    "newline-after-var": ["warn", "always"],
    "newline-before-return": "warn",
    "newline-per-chained-call": ["warn", {"ignoreChainWithDepth": 3}],
    "no-array-constructor": "error",
    "no-bitwise": "off",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": ["warn", {"max": 2}],
    "no-negated-condition": "warn",
    "no-nested-ternary": "off",
    "no-new-object": "error",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-spaced-func": "warn",
    "no-ternary": "off",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": "off",
    "one-var": ["warn", "always"],
    "one-var-declaration-per-line": ["warn", "initializations"],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["warn", "before"],
    "padded-blocks": ["warn", "never"],
    "quote-props": ["error", "as-needed", { "keywords": true, "unnecessary": false }],
    "quotes": ["error", "double", "avoid-escape"],
    "require-jsdoc": "off",
    "semi": ["warn", "always"],
    "semi-spacing": ["warn", {"before": false, "after": true}],
    "sort-vars": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": ["warn", {"anonymous": "never", "named": "never"}],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", {"words": true, "nonwords": false}],
    "spaced-comment":  ["error", "always", { "block": { "exceptions": ["-"] } }],
    "wrap-regex": "error"
};
