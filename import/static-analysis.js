module.exports = {
    rules: {
        'import/no-unresolved': [
            'error',
            {
                commonjs: true,
                caseSensitive: true
            }
        ],
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'import/no-restricted-paths': 'off',
        'import/no-absolute-path': 'error',
        'import/no-dynamic-require': 'error',
        'import/no-internal-modules': ['off', { allow: [] }],
        'import/no-webpack-loader-syntax': 'error'
    }
};
