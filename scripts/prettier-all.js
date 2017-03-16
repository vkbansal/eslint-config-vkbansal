module.exports = {
    extends: [
        '../node_modules/eslint-config-prettier/index.js',
        '../node_modules/eslint-config-prettier/react.js'
    ].map(require.resolve)
};
