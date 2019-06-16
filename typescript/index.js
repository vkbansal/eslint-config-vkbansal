module.exports = {
    plugins: ['@typescript-eslint'],
    rules: {
        camelcase: 0,
        'no-magic-numbers': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/adjacent-overload-signatures': 2,
        '@typescript-eslint/array-type': [2, 'array-simple'],
        '@typescript-eslint/await-thenable': 2,
        '@typescript-eslint/ban-ts-ignore': 2,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/camelcase': [2, { properties: 'always', ignoreDestructuring: false }],
        '@typescript-eslint/class-name-casing': 2,
        '@typescript-eslint/explicit-function-return-type': 1,
        '@typescript-eslint/explicit-member-accessibility': 2,
        '@typescript-eslint/func-call-spacing': 0, // handled by prettier
        '@typescript-eslint/generic-type-naming': 0,
        '@typescript-eslint/indent': 0, // handled by prettier
        '@typescript-eslint/interface-name-prefix': 2,
        '@typescript-eslint/member-delimiter-style': 0, // handled by prettier
        '@typescript-eslint/member-naming': 0,
        '@typescript-eslint/member-ordering': [
            1,
            {
                defaults: [
                    // Fields
                    'static-field', // = ['public-static-field', 'protected-static-field', 'private-static-field'])
                    'instance-field', // = ['public-instance-field', 'protected-instance-field', 'private-instance-field'])

                    // Constructors
                    'constructor', // = ['public-constructor', 'protected-constructor', 'private-constructor'])

                    // Methods
                    'static-method', // = ['public-static-method', 'protected-static-method', 'private-static-method'])
                    'instance-method' // = ['public-instance-method', 'protected-instance-method', 'private-instance-method']
                ]
            }
        ],
        '@typescript-eslint/no-angle-bracket-type-assertion': 2,
        '@typescript-eslint/no-array-constructor': 2,
        '@typescript-eslint/no-empty-interface': 2,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-extra-parens': 0, // handled by prettier
        '@typescript-eslint/no-extraneous-class': 2,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-for-in-array': 2,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-magic-numbers': ['error', { ignoreNumericLiteralTypes: true, ignoreEnum: true }],
        '@typescript-eslint/no-misused-new': 2,
        '@typescript-eslint/no-namespace': 2,
        '@typescript-eslint/no-non-null-assertion': 2,
        '@typescript-eslint/no-object-literal-type-assertion': 2,
        '@typescript-eslint/no-parameter-properties': 2,
        '@typescript-eslint/no-require-imports': 2,
        '@typescript-eslint/no-this-alias': 1,
        '@typescript-eslint/no-triple-slash-reference': 2,
        '@typescript-eslint/no-type-alias': 0,
        '@typescript-eslint/no-unnecessary-qualifier': 1,
        '@typescript-eslint/no-unnecessary-type-assertion': 1,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/no-useless-constructor': 1,
        '@typescript-eslint/no-var-requires': 2,
        '@typescript-eslint/prefer-for-of': 1,
        '@typescript-eslint/prefer-function-type': 0,
        '@typescript-eslint/prefer-includes': 2,
        '@typescript-eslint/prefer-interface': 2,
        '@typescript-eslint/prefer-namespace-keyword': 0,
        '@typescript-eslint/prefer-regexp-exec': 2,
        '@typescript-eslint/prefer-string-starts-ends-with': 2,
        '@typescript-eslint/promise-function-async': 2,
        '@typescript-eslint/require-array-sort-compare': 0,
        '@typescript-eslint/restrict-plus-operands': 2,
        '@typescript-eslint/semi': 0, // handled by prettier
        '@typescript-eslint/type-annotation-spacing': 0, // handled by prettier
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/unified-signatures': 1
    }
};
