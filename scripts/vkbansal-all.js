module.exports = {
    extends: [
        '../index.js',
        '../react.js'
    ].map(require.resolve)
};
