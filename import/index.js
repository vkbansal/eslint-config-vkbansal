module.exports = {
    plugins: ['import'],
    extends: [
        'plugin:import/typescript',
        ...['./helpful-warnings', './module-systems', './static-analysis', './style-guide'].map(
            require.resolve
        )
    ]
};
