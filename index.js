module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['./core', './import'].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2019,
        ecmaFeatures: {
            impliedStrict: true
        },
        sourceType: 'module'
    },
    env: {
        node: true,
        browser: true,
        jest: true
    },
    rules: {
        strict: ['error', 'never']
    }
};
