module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        './core/best-practices',
        './core/possible-errors',
        './core/nodejs-and-commonjs',
        './core/stylistic-issues',
        './core/variables',
        './core/ecmascript-6',
        './import/helpful-warnings',
        './import/module-systems',
        './import/static-analysis',
        './import/style-guide'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2019,
        ecmaFeatures: {
            impliedStrict: true
        },
        sourceType: 'module'
    },
    env: {
        node: true,
        browser: true,
        jest: true
    },
    rules: {
        strict: ['error', 'never']
    }
};
