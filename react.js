module.exports = {
    'plugins': [
        'react'
    ],
    'parserOptions' : {
        'ecmaFeatures': {
            'jsx': true
        }
    },
    extends: [
        './react/core',
        './react/jsx'
    ].map(require.resolve),
    'rules': {
        'jsx-quotes': ['error', 'prefer-single'],
        'class-methods-use-this': ['error', { 'exceptMethods': ['render', 'getInitialState', 'getDefaultProps', 'getChildContext', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'] }]
    }
};
