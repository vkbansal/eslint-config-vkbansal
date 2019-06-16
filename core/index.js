module.exports = {
    extends: [
        './best-practices',
        './ecmascript-6',
        './nodejs-and-commonjs',
        './possible-errors',
        './stylistic-issues',
        './variables'
    ].map(require.resolve)
};
