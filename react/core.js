module.exports = {
    rules: {
        'react/display-name': ['off', { ignoreTranspilerName: false }],
        'react/forbid-component-props': ['off', { forbid: [] }],
        'react/forbid-elements': 'off',
        'react/forbid-foreign-prop-types': 'off',
        'react/forbid-prop-types': ['error', { forbid: [] }],
        'react/no-array-index-key': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'warn',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': ['error'],
        'react/no-did-mount-set-state': ['error'],
        'react/no-did-update-set-state': ['error'],
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-prop-types': [
            'error',
            {
                customValidators: [],
                skipShapeProps: true
            }
        ],
        'react/prefer-es6-class': ['error', 'always'],
        'react/prefer-stateless-function': 'error',
        'react/prop-types': [
            'error',
            {
                ignore: [],
                customValidators: []
            }
        ],
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': 'error',
        'react/require-optimization': ['off', { allowDecorators: [] }],
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': [
            'error',
            {
                order: [
                    'static-methods',
                    'lifecycle',
                    '/^(on|handle).+$',
                    '/^(get|set)(?!InitialState$|DefaultProps$|ChildContext$).+$/',
                    'everything-else',
                    '/^render.+$/',
                    'render'
                ]
            }
        ],
        'react/sort-prop-types': ['off', { ignoreCase: true, callbacksLast: false, requiredFirst: false }],
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error'
    }
};
