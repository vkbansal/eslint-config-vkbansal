module.exports = {
    rules: {
        'array-bracket-spacing': [1, 'never'],
        'block-spacing': [1, 'always'],
        'brace-style': [1, '1tbs', { 'allowSingleLine': true }],
        'camelcase': [1, {'properties': 'never'}],
        'capitalized-comments': 0,
        'comma-dangle': [2, 'never'],
        'comma-spacing': [1, {'before': false, 'after': true}],
        'comma-style': [1, 'last'],
        'computed-property-spacing': [1, 'never'],
        'consistent-this': [1, 'that'],
        'eol-last': 1,
        'func-call-spacing': [2, 'never'],
        'func-name-matching': 0,
        'func-names': 0,
        'func-style': [2, 'declaration', { 'allowArrowFunctions': true }],
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        'indent': [2, 4, {'SwitchCase': 1, 'VariableDeclarator': {'var': 1, 'let': 1, 'const': 1}}],
        'jsx-quotes': 0,
        'key-spacing': [1, {'beforeColon': false, 'afterColon': true}],
        'keyword-spacing': [2, {'before': true, 'after': true}],
        'line-comment-position': 0,
        'linebreak-style': [2, 'unix'],
        'lines-around-comment': 0,
        'lines-around-directive': 0,
        'max-depth': 1,
        'max-len': 0,
        'max-lines': 0,
        'max-nested-callbacks': 0,
        'max-params': [1, 4],
        'max-statements': 0,
        'multiline-ternary': 0,
        'max-statements-per-line': [1, { 'max': 1 }],
        'new-cap': [2, {'newIsCap': true, 'capIsNew': false}],
        'new-parens': 2,
        'newline-after-var': [1, 'always'],
        'newline-before-return': 1,
        'newline-per-chained-call': [1, {'ignoreChainWithDepth': 3}],
        'no-array-constructor': 2,
        'no-bitwise': 0,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 2,
        'no-mixed-operators': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [1, {'max': 2}],
        'no-multi-assign': 0,
        'no-negated-condition': 1,
        'no-nested-ternary': 0,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-restricted-syntax': 0,
        'no-tabs': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'nonblock-statement-body-position': [2 , 'beside'],
        'object-curly-newline': 0,
        'object-curly-spacing': 0,
        'object-property-newline': 0,
        'one-var-declaration-per-line': [1, 'initializations'],
        'one-var': [1, 'never'],
        'operator-assignment': [2, 'always'],
        'operator-linebreak': [1, 'before'],
        'padded-blocks': [1, 'never'],
        'quote-props': [2, 'as-needed', { 'keywords': true, 'unnecessary': false }],
        'quotes': [2, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
        'require-jsdoc': 0,
        'semi': [1, 'always'],
        'semi-spacing': [1, {'before': false, 'after': true}],
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, {'anonymous': 'always', 'named': 'never'}],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [2, {'words': true, 'nonwords': false}],
        'spaced-comment':  [2, 'always', { 'block': { 'exceptions': ['-'] } }],
        'template-tag-spacing': 2,
        'unicode-bom': [2, 'never'],
        'wrap-regex': 2
    }
};
