module.exports = {
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
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {
            'impliedStrict': false,
            'experimentalObjectRestSpread': true
        },
        sourceType: 'module'
    },
    env: {
        'browser': true,
        'node': true,
        'commonjs': true,
        'es6': true,
        'shared-node-browser': true
    },
    plugins: ['import']
};
