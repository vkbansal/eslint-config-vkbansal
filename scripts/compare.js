const path = require('path');
const CLIEngine = require('eslint').CLIEngine;
const jdiff = require('json-diff').diffString;

const type = process.argv[2];


if (type === 'prettier') {
    const vkbansal = new CLIEngine({
        useEslintrc: false,
        configFile: path.resolve(__dirname, './vkbansal-all.js')
    });

    const vkbansalConfig = vkbansal.getConfigForFile('index.js');
    const prettier = new CLIEngine({
        useEslintrc: false,
        configFile: path.resolve(__dirname, './prettier-all.js')
    });

    const prettierConfig = prettier.getConfigForFile('index.js');

    console.log(jdiff(prettierConfig, vkbansalConfig));
} else if (type === 'base') {
    const vkbansal = new CLIEngine({
        useEslintrc: false,
        configFile: path.resolve(__dirname, '../index.js')
    });

    const vkbansalConfig = vkbansal.getConfigForFile('index.js');
    const airbnb = new CLIEngine({
        useEslintrc: false,
        configFile: path.resolve(__dirname, '../node_modules/eslint-config-airbnb-base/index.js')
    });

    const airbnbConfig = airbnb.getConfigForFile('index.js');

    console.log(jdiff(airbnbConfig, vkbansalConfig));
} else {
    const vkbansal = new CLIEngine({
        useEslintrc: false,
        configFile: path.resolve(__dirname, './vkbansal-all.js')
    });

    const vkbansalConfig = vkbansal.getConfigForFile('index.js');
    const airbnb = new CLIEngine({
        useEslintrc: false,
        configFile: path.resolve(__dirname, '../node_modules/eslint-config-airbnb/index.js')
    });

    const airbnbConfig = airbnb.getConfigForFile('index.js');

    console.log(jdiff(airbnbConfig, vkbansalConfig));
}

