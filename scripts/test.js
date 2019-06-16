const CLIEngine = require('eslint').CLIEngine;

const vkbansal = new CLIEngine({
    useEslintrc: false,
    rules: ['../index.js', '../react', '../typescript'].map(require.resolve)
});

const vkbansalConfig = vkbansal.getConfigForFile('index.js');
