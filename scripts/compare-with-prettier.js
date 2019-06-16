const prettierConfig = require('eslint-config-prettier');
const prettierConfigReact = require('eslint-config-prettier/react');
const chalk = require('chalk');

const myrules = {
    ...require('../core/stylistic-issues').rules,
    ...require('../core/ecmascript-6').rules,
    ...require('../core/best-practices').rules,
    ...require('../core/nodejs-and-commonjs').rules,
    ...require('../core/possible-errors').rules,
    ...require('../core/variables').rules,
    ...require('../react/core').rules,
    ...require('../react/jsx').rules
};

function getRuleState(rule) {
    if (Array.isArray(rule)) {
        return rule[0];
    }

    return rule;
}

let exitcode = 0;

for (const rule in prettierConfig.rules) {
    const myrule = myrules[rule];

    if (typeof myrule === 'undefined') {
        console.log(`${rule} rule not defined`);
        continue;
    }

    if (prettierConfig.rules[rule] === 'off' && getRuleState(myrule) !== 0) {
        console.log(`${chalk.red(rule)} doesn't match "eslint-config-prettier"`);
        exitcode = 1;
    }

    if (prettierConfig.rules[rule] === 0 && getRuleState(myrule) !== 0) {
        console.log(`${chalk.yellow(rule)} doesn't match "eslint-config-prettier"`);
        exitcode = 1;
    }
}

for (const rule in prettierConfigReact.rules) {
    const myrule = myrules[rule];

    if (prettierConfigReact.rules[rule] === 'off' && getRuleState(myrule) !== 0) {
        console.log(`${chalk.red(rule)} doesn't match "eslint-config-prettier"`);
        exitcode = 1;
    }

    if (prettierConfigReact.rules[rule] === 0 && getRuleState(myrule) !== 0) {
        console.log(`${chalk.yellow(rule)} doesn't match "eslint-config-prettier"`);
        exitcode = 1;
    }
}

process.exit(exitcode);
