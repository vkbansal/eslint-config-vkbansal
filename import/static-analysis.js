module.exports = {
    rules: {
        'import/default': 0, // handled by TS
        'import/named': 0, // handled by TS
        'import/namespace': 2, // handled by TS
        'import/no-absolute-path': 2,
        'import/no-cycle': 2,
        'import/no-dynamic-require': 2,
        'import/no-internal-modules': 0,
        'import/no-relative-parent-imports': 2,
        'import/no-restricted-paths': 0,
        'import/no-self-import': 2,
        'import/no-unresolved': 0, // handles by TS
        'import/no-unused-modules': [1, { unusedExports: true }],
        'import/no-useless-path-segments': 2,
        'import/no-webpack-loader-syntax': 2
    }
};
