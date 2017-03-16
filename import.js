module.exports = {
    plugins: ['import'],
    settings: {
        'import/extensions': ['.js', '.jsx'],
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$'
        ],
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.json']
            }
        }
    },
    extends: [
        './import/helpful-warnings',
        './import/module-systems',
        './import/static-analysis',
        './import/style-guide'
    ].map(require.resolve)
};
