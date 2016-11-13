module.exports = {
	extends: [
        './import/helpful-warnings',
        './import/module-systems',
		'./import/static-analysis',
		'./import/style-guide'
    ].map(require.resolve)
	settings: {
		'import/resolver': 'webpack'
	}
};
