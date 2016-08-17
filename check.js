let axios = require("axios"),
    cheerio = require("cheerio");


axios.get("http://eslint.org/docs/rules/")
    .then((res) => {
        var $ = cheerio.load(res.data);

        $("table.rule-list").each(function () {
            let e = $(this),
                category = e.prev().prev().attr("id"),
                rulesFile = require(`./rules/${category}.js`),
                oldRules = new Set(Object.keys(rulesFile.rules)),
                newRules = new Set(e.find("tbody > tr > td > p > a").map(function() { return $(this).text();}).get());

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
    }).catch((err) => console.log(err));
