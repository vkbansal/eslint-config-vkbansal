module.exports = {
    rules: {
        'import/export': 2,
        'import/no-deprecated': 0,
        'import/no-extraneous-dependencies': [
            2,
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false
            }
        ],
        'import/no-mutable-exports': 2,
        'import/no-named-as-default-member': 2,
        'import/no-named-as-default': 2,
        'import/no-unused-modules': [1, { unusedExports: true }]
    }
};
