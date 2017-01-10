const axios = require('axios');
const cheerio = require('cheerio');
const chalk = require('chalk');

const reactRuleFiles = ['./react/core', './react/jsx'];

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
		logRules(rulesRemoved, chalk.red);
		for (let r of rulesRemoved) {
			console.log(chalk.red(` -- ${r}`));
		}
	}
}

const requestChecks = {
	core() {
		axios.get("http://eslint.org/docs/rules/")
		    .then((res) => {
				console.log(chalk.bold.underline('ESLint Rules'));

		        const $ = cheerio.load(res.data);

		        $("table.rule-list").each(function () {
		            const e = $(this);
		            const category = e.prev().prev().attr("id");
		            const rulesFile = require(`./rules/${category}.js`);
		            const oldRules = new Set(Object.keys(rulesFile.rules));
		            const newRules = new Set(e.find("tbody > tr > td > p > a").map(function () {
						return $(this).text();
					}).get());

					logStats(category, oldRules, newRules);
		        });

				console.log(' ');
		    }).catch((err) => console.log(err));
	},
	react() {
		axios.get('https://github.com/yannickcr/eslint-plugin-react')
		    .then((res) => {
				console.log(chalk.bold.underline('ESLint React Rules'));

		        const $ = cheerio.load(res.data.trim());

		        $('#user-content-list-of-supported-rules').closest('h1').siblings('ul').slice(0, 2).each(function (i) {
		            const e = $(this);
					const oldRules = new Set(Object.keys(require(reactRuleFiles[i]).rules));
		            const newRules = new Set(e.find('li > a').map(function () {
						return $(this).text();
					}).get());

					logStats(reactRuleFiles[i].slice(8), oldRules, newRules);
		        });

				console.log(' ');
		    }).catch((err) => console.log(err));
	},
	import() {
		axios.get('https://github.com/benmosher/eslint-plugin-import')
		    .then((res) => {
				console.log(chalk.bold.underline('ESLint Import Rules'));

		        const $ = cheerio.load(res.data.trim());

		        $('#user-content-rules').closest('h2').siblings('p').filter(function () {
					return $(this).find('strong').length;
				}).slice(1).each(function (i) {
		            const e = $(this);
					const category = e.find('strong').text().replace(':', '').replace(' ', '-').toLowerCase();
					const rulesFile = require(`./import/${category}.js`);
		            const oldRules = new Set(Object.keys(rulesFile.rules));
		            const newRules = new Set(e.next().find('li > a > code').map(function () {
						return `import/${$(this).text()}`;
					}).get());

		         	logStats(category, oldRules, newRules);
		        });

				console.log(' ');
		    }).catch((err) => console.log(err));
	}
}

if (type && requestChecks[type]) {
	requestChecks[type]();
} else {
	requestChecks.core();
}
