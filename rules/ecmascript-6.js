module.exports = {
    rules: {
        'arrow-body-style': [1, 'as-needed'],
        'arrow-parens': [1, 'always'],
        'arrow-spacing': [1, {'before': true, 'after': true}],
        'constructor-super': 2,
        'generator-star-spacing': [2, {'before': false, 'after': true}],
        'no-class-assign': 2,
        'no-confusing-arrow': 0,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': [2, { includeExports: true }],
        'no-new-symbol': 2,
        'no-restricted-imports': 0,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 1,
        'no-useless-rename': [2, {'ignoreDestructuring': false, 'ignoreImport': false, 'ignoreExport': true}],
        'no-var': 2,
        'object-shorthand': [1, 'always'],
        'prefer-arrow-callback': 1,
        'prefer-const': 0,
        "prefer-destructuring": [2, {
            'array': false,
            'object': true
        }, {
            'enforceForRenamedProperties': false
        }],
        'prefer-numeric-literals' : 0,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 2,
        'require-yield': 2,
        'rest-spread-spacing': [2, 'never'],
        'sort-imports': 0,
        'symbol-description': 0,
        'template-curly-spacing': [2, 'never'],
        'yield-star-spacing': [2, 'after']
    }
};
