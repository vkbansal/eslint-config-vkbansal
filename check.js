"use strict";

let axios = require("axios"),
    cheerio = require("cheerio"),
    p = require("./package.json");


// axios
//     .get("https://api.github.com/repos/eslint/eslint/releases/latest")
//     .then((res) => {
//         console.log(`Current version is v${p.peerDependencies.eslint.substr(1)}`);
//         console.log(`Latest version is ${res.data.tag_name}`);
//     });


axios.get("http://eslint.org/docs/rules/")
    .then((res) => {
        var $ = cheerio.load(res.data);

        $("h2 + p + ul").each(function () {
            let e = $(this),
                category = e.prev().prev().attr("id"),
                rulesFile = require(`./rules/${category}.js`),
                oldRules = new Set(Object.keys(rulesFile)),
                newRules = new Set(e.find("li > a").map(function() { return $(this).text();}).get());

            console.log(`\n${category}`);

            let rulesAdded = new Set([...newRules].filter((x) => !oldRules.has(x))),
                rulesRemoved = new Set([...oldRules].filter((x) => !newRules.has(x)));

            console.log(`Rules: ${oldRules.size}/${newRules.size}`);

            if (rulesAdded.size) {
                console.log("Rules Added", [...rulesAdded]);
            }

            if (rulesRemoved.size) {
                console.log("Rules Removed", [...rulesRemoved]);
            }

        });
    })
