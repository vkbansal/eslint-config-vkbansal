module.exports = {
    rules: {
        'array-bracket-newline': 0, // hanlded by prettier
        'array-bracket-spacing': 0, // hanlded by prettier
        'array-element-newline': 0, // hanlded by prettier
        'block-spacing': 0, // handled by prettier
        'brace-style': 0, // handled by prettier
        camelcase: [
            2,
            {
                properties: 'never'
            }
        ],
        'capitalized-comments': [
            0,
            'never',
            {
                line: {
                    ignorePattern: '.*',
                    ignoreInlineComments: true,
                    ignoreConsecutiveComments: true
                },
                block: {
                    ignorePattern: '.*',
                    ignoreInlineComments: true,
                    ignoreConsecutiveComments: true
                }
            }
        ],
        'comma-dangle': 0, // handled by prettier,
        'comma-spacing': 0, // handled by prettier
        'comma-style': 0, // handled by prettier
        'computed-property-spacing': 0, // handled by prettier
        'consistent-this': 0,
        'eol-last': 0, // handled by prettier
        'func-call-spacing': 0, // handled by prettier
        'func-name-matching': 0,
        'func-names': 'warn',
        'func-style': [0, 'expression'],
        'function-paren-newline': 0, // handled by prettier
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        'implicit-arrow-linebreak': 0, // handled by prettier
        indent: 0, // handled by prettier
        'jsx-quotes': 0, // handled by prettier,
        'key-spacing': 0, // handled by prettier
        'keyword-spacing': 0, // handled by prettier
        'line-comment-position': [
            0,
            {
                position: 'above',
                ignorePattern: '',
                applyDefaultPatterns: true
            }
        ],
        'linebreak-style': 0, // handled by prettier
        'lines-around-comment': 0,
        'lines-between-class-members': 2,
        'max-depth': [0, 4],
        'max-len': 0, // handled by prettier
        'max-lines': [
            0,
            {
                max: 300,
                skipBlankLines: true,
                skipComments: true
            }
        ],
        'max-lines-per-function': 0,
        'max-nested-callbacks': 0,
        'max-params': [0, 3],
        'max-statements': [0, 10],
        'multiline-comment-style': [2, 'starred-block'],
        'multiline-ternary': [0, 'never'],
        'max-statements-per-line': [0, { max: 1 }],
        'new-cap': [
            2,
            {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
            }
        ],
        'new-parens': 0, // handled by prettier
        'newline-per-chained-call': 0, // handled by prettier
        'no-array-constructor': 2,
        'no-bitwise': 2,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 2,
        'no-mixed-operators': 0, // handled by prettier,
        'no-mixed-spaces-and-tabs': 0, // handled by prettier
        'no-multi-assign': 2,
        'no-multiple-empty-lines': 0, // handled by prettier
        'no-negated-condition': 0,
        'no-nested-ternary': 0,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-restricted-syntax': [
            2,
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ],
        'no-tabs': 0, // handled by prettier
        'no-ternary': 0,
        'no-trailing-spaces': 0, // handled by prettier
        'no-underscore-dangle': [
            2,
            {
                allowAfterThis: false
            }
        ],
        'no-unneeded-ternary': [
            2,
            {
                defaultAssignment: false
            }
        ],
        'no-whitespace-before-property': 0, // handled by prettier
        'nonblock-statement-body-position': 0, // handled by prettier
        'object-curly-newline': [
            0,
            {
                ObjectExpression: {
                    minProperties: 0,
                    multiline: true
                },
                ObjectPattern: {
                    minProperties: 0,
                    multiline: true
                }
            }
        ],
        'object-curly-spacing': 0, // handled by prettier
        'object-property-newline': 0, // handled by prettier
        'one-var-declaration-per-line': 0, // handled by prettier
        'one-var': [2, 'never'],
        'operator-assignment': [2, 'always'],
        'operator-linebreak': 0,
        'padded-blocks': 0, // handled by prettier
        'padding-line-between-statements': 0,
        'prefer-object-spread': 2,
        'quote-props': 0, // handled by prettier
        quotes: 0, // handled by prettier,
        semi: 0, // handled by prettier
        'semi-spacing': 0, // handled by prettier
        'semi-style': 0, // handled by prettier
        'sort-keys': [0, 'asc', { caseSensitive: false, natural: true }],
        'sort-vars': 0,
        'space-before-blocks': 0, // handled by prettier
        'space-before-function-paren': 0, // handled by prettier
        'space-in-parens': 0, // handled by prettier
        'space-infix-ops': 0, // handled by prettier
        'space-unary-ops': 0, // handled by prettier
        'spaced-comment': [
            2,
            'always',
            {
                line: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!']
                },
                block: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!'],
                    balanced: false
                }
            }
        ],
        'switch-colon-spacing': 0, // handled by prettier
        'template-tag-spacing': 0, // handled by prettier
        'unicode-bom': 0, // handled by prettier
        'wrap-regex': 0 // handled by prettier
    }
};
