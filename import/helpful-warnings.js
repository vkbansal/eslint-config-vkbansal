module.exports = {
    rules: {
        'import/export': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    'test/**',
                    'tests/**',
                    'spec/**',
                    '**/__tests__/**',
                    'test.js',
                    'test-*.js',
                    '**/*.test.js',
                    '**/*.spec.js',
                    '**/webpack.config.js',
                    '**/webpack.config.*.js',
                    '**/rollup.config.js',
                    '**/gulpfile.js',
                    '**/gulpfile.*.js',
                    '**/Gruntfile'
                ],
                optionalDependencies: false
            }
        ],
        'import/no-mutable-exports': 'error'
    }
};
