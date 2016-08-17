module.exports = {
    extends: [
        './react/core',
        './react/jsx'
    ].map(require.resolve),
    'plugins': [
        'react'
    ],
    'parserOptions' : {
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'rules': {
        'jsx-quotes': ['error', 'prefer-single']
    }
};
