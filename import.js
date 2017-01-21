module.exports = {
    plugins: ['import'],
    settings: {
        'import/resolver': 'node'
    },
    extends: [
        './import/helpful-warnings',
        './import/module-systems',
        './import/static-analysis',
        './import/style-guide'
    ].map(require.resolve)
};
