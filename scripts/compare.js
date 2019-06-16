const axios = require('axios');
const cheerio = require('cheerio');
const chalk = require('chalk');

const reactRuleFiles = ['../react/core', '../react/jsx'];

const type = process.argv[2];

function logStats(category, oldRules, newRules) {
    const rulesAdded = new Set([...newRules].filter((x) => !oldRules.has(x)));
    const rulesRemoved = new Set([...oldRules].filter((x) => !newRules.has(x)));

    const x = oldRules.size;
    const y = newRules.size;

    console.log(chalk.bold(`${category}: `), chalk[x === y ? 'white' : 'yellow'](`${x}/${y}`));

    if (rulesAdded.size) {
        for (let r of rulesAdded) {
            console.log(chalk.green(` ++ ${r}`));
        }
    }

    if (rulesRemoved.size) {
        for (let r of rulesRemoved) {
            console.log(chalk.red(` -- ${r}`));
        }
    }
}

const requestChecks = {
    async core() {
        axios
            .get('http://eslint.org/docs/rules/')
            .then((res) => {
                console.log(chalk.bold.underline('ESLint Rules'));

                const $ = cheerio.load(res.data);

                $('table.rule-list').each(function() {
                    const e = $(this);
                    const category = e
                        .prev()
                        .prev()
                        .attr('id');
                    if (category === 'strict-mode') return;
                    const rulesFile = require(`../core/${category}.js`);
                    const oldRules = new Set(Object.keys(rulesFile.rules));
                    const newRules = new Set(
                        e
                            .find('tbody > tr > td > p > a')
                            .map(function() {
                                return $(this).text();
                            })
                            .get()
                    );

                    logStats(category, oldRules, newRules);
                });

                console.log(' ');
            })
            .catch((err) => console.log(err));
    },
    async react() {
        axios
            .get('https://github.com/yannickcr/eslint-plugin-react/blob/master/README.md')
            .then((res) => {
                console.log(chalk.bold.underline('ESLint React Rules'));

                const $ = cheerio.load(res.data.trim());

                $('#user-content-list-of-supported-rules')
                    .closest('h1')
                    .siblings('ul')
                    .slice(0, 2)
                    .each(function(i) {
                        const e = $(this);
                        const oldRules = new Set(Object.keys(require(reactRuleFiles[i]).rules));
                        const newRules = new Set(
                            e
                                .find('li > a')
                                .map(function() {
                                    return $(this).text();
                                })
                                .get()
                        );

                        logStats(reactRuleFiles[i].slice(8), oldRules, newRules);
                    });
            })
            .catch((err) => console.log(err));
    },
    async import() {
        const res = await axios.get('https://github.com/benmosher/eslint-plugin-import/blob/master/README.md');
        console.log(chalk.bold.underline('ESLint Import Rules'));

        const $ = cheerio.load(res.data.trim());

        $('#user-content-rules')
            .closest('h2')
            .siblings('h3')
            .filter(function() {
                return $(this)
                    .next()
                    .is('ul');
            })
            .each(function(i) {
                const e = $(this);
                const category = e
                    .text()
                    .replace(':', '')
                    .replace(' ', '-')
                    .toLowerCase();
                const rulesFile = require(`../import/${category}.js`);
                const oldRules = new Set(Object.keys(rulesFile.rules));
                const newRules = new Set(
                    e
                        .next('ul')
                        .find('li > a > code')
                        .map(function() {
                            return `import/${$(this).text()}`;
                        })
                        .get()
                );

                logStats(category, oldRules, newRules);
            });
    },
    async ts() {
        const res = await axios.get(
            'https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md'
        );
        console.log(chalk.bold.underline('@typescript-eslint Rules'));

        const $ = cheerio.load(res.data.trim());

        const rulesFile = require(`../typescript`);
        const oldRules = new Set(Object.keys(rulesFile.rules));
        const newRules = new Set(
            $('#user-content-supported-rules')
                .closest('h2')
                .next()
                .next('table')
                .find('tbody > tr')
                .map(function(i) {
                    const e = $(this);
                    return e
                        .find('td > a')
                        .text()
                        .trim();
                })
                .get()
        );

        logStats('@typescript-eslint', oldRules, newRules);
    }
};

(async () => {
    try {
        if (type && requestChecks[type]) {
            await requestChecks[type]();
        } else {
            await requestChecks.core();
        }
    } catch (e) {
        console.log(e);
    }
})();
