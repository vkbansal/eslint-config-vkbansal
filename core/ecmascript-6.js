module.exports = {
    rules: {
        'arrow-body-style': 0, // handled by prettier
        'arrow-parens': 0, // handled by prettier
        'arrow-spacing': 0, // handled by prettier
        'constructor-super': 2,
        'generator-star-spacing': 0, // handled by prettier
        'no-class-assign': 2,
        'no-confusing-arrow': 0, // handled by prettier
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 0, // handled by import plugin
        'no-new-symbol': 2,
        'no-restricted-imports': 0,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': [
            2,
            { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }
        ],
        'no-var': 2,
        'object-shorthand': [
            2,
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true
            }
        ],
        'prefer-arrow-callback': 0, // handled by prettier
        'prefer-const': [
            0,
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true
            }
        ],
        'prefer-destructuring': [
            0,
            {
                array: true,
                object: true
            },
            {
                enforceForRenamedProperties: false
            }
        ],
        'prefer-numeric-literals': 2,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 2,
        'require-yield': 2,
        'rest-spread-spacing': 0, // handled by prettier
        'sort-imports': 0, // handled by import plugin
        'symbol-description': 2,
        'template-curly-spacing': 0, // handled by prettier
        'yield-star-spacing': 0 // handled by prettier
    }
};
