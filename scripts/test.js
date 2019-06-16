const CLIEngine = require('eslint').CLIEngine;

const vkbansal = new CLIEngine({
    useEslintrc: false,
    rules: ['./index.js', './react.js'].map(require.resolve)
});

const vkbansalConfig = vkbansal.getConfigForFile('index.js');
