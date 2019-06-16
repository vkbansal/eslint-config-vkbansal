module.exports = {
    plugins: ['react', 'react-hooks'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: ['./core', './jsx', './hooks']
};
