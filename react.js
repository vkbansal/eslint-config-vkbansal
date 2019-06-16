module.exports = {
    plugins: ['react', 'react-hooks'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: ['./react/core', './react/jsx', './react/hooks'].map(require.resolve),
    rules: {}
};
