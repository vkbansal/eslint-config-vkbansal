module.exports = {
    rules: {
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'off',
        'no-cond-assign': ['error', 'always'],
        'no-console': 'warn',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': [
            'error',
            'all',
            {
                conditionalAssign: true,
                nestedBinaryExpressions: false,
                returnAssign: false,
                ignoreJSX: 'multi-line'
            }
        ],
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unreachable': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': ['error', { requireStringLiterals: true }]
    }
};
