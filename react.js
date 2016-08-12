let reactConfig = {
    "plugins": [
        "react"
    ],
    "parserOptions" : {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "jsx-quotes": ["error", "prefer-single"]
    }
}

Object.assign(
    reactConfig.rules,
    require("./react/core"),
    require("./react/jsx")
);

module.exports = reactConfig;
