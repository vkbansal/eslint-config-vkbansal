module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            'impliedStrict': true,
            'experimentalObjectRestSpread': true
        },
        sourceType: 'module'
    },
    env: {
        'browser': true,
        'node': true,
        'commonjs': true,
        'shared-node-browser': true,
        'es6': true
    },
    extends: [
        './rules/possible-errors',
        './rules/best-practices',
        './rules/strict-mode',
        './rules/variables',
        './rules/nodejs-and-commonjs',
        './rules/stylistic-issues',
        './rules/ecmascript-6',
        './import',
        './standard'
    ].map(require.resolve)
};
