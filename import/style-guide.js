module.exports = {
    rules: {
        'import/dynamic-import-chunkname': 0,
        'import/exports-last': 0,
        'import/extensions': [
            2,
            'always',
            { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
        ],
        'import/first': [2, 'absolute-first'],
        'import/group-exports': 0,
        'import/max-dependencies': [0, { max: 10 }],
        'import/newline-after-import': 2,
        'import/no-anonymous-default-export': 2,
        'import/no-default-export': 0,
        'import/no-duplicates': 2,
        'import/no-named-default': 2,
        'import/no-named-export': 0,
        'import/no-namespace': 0,
        'import/no-unassigned-import': 0,
        'import/order': [
            2,
            {
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
            }
        ],
        'import/prefer-default-export': 1
    }
};
