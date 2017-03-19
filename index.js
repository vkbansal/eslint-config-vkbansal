module.exports = {
    extends: [
        './rules/best-practices',
        './rules/possible-errors',
        './rules/nodejs-and-commonjs',
        './rules/stylistic-issues',
        './rules/variables',
        './rules/ecmascript-6',
        './import',
    ].map(require.resolve),
        parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            'impliedStrict': true,
            'experimentalObjectRestSpread': true
        },
        sourceType: 'module'
    },
    env: {
        'node': true,
        'es6': true
    },
    rules: {
        'strict': ['error', 'never']
    }
};
