module.exports = {
    plugins: ['import'],
    extends: [
        'plugin:import/typescript',
        'plugin:import/react',
        ...['./helpful-warnings', './module-systems', './static-analysis', './style-guide'].map(
            require.resolve
        )
    ]
};
