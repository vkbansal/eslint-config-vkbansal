module.exports = {
    plugins: ['import'],
    extends: [
        'plugin:import/typescript',
        'plugin:import/react',
        './import/helpful-warnings',
        './import/module-systems',
        './import/static-analysis',
        './import/style-guide'
    ].map(require.resolve)
};
