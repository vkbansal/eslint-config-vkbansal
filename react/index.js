module.exports = {
    plugins: ['react', 'react-hooks'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: ['./core', './jsx', './hooks'].map(require.resolve)
};
