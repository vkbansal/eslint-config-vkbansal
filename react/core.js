module.exports = {
    rules: {
        'react/boolean-prop-naming': 0,
        'react/button-has-type': 2,
        'react/default-props-match-prop-types': 0,
        'react/destructuring-assignment': [2, 'always'],
        'react/display-name': [2, { ignoreTranspilerName: true }],
        'react/forbid-component-props': [0, { forbid: [] }],
        'react/forbid-dom-props': 0,
        'react/forbid-elements': 0,
        'react/forbid-foreign-prop-types': 0,
        'react/forbid-prop-types': [2, { forbid: ['any'] }],
        'react/no-access-state-in-setstate': 2,
        'react/no-array-index-key': 2,
        'react/no-children-prop': 2,
        'react/no-danger': 2,
        'react/no-danger-with-children': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/no-multi-comp': [2, { ignoreStateless: true }],
        'react/no-redundant-should-component-update': 2,
        'react/no-render-return-value': 2,
        'react/no-set-state': 0,
        'react/no-string-refs': 2,
        'react/no-typos': 2,
        'react/no-this-in-sfc': 2,
        'react/no-unescaped-entities': 2,
        'react/no-unknown-property': 2,
        'react/no-unsafe': 2,
        'react/no-unused-prop-types': [
            2,
            {
                customValidators: [],
                skipShapeProps: true
            }
        ],
        'react/no-unused-state': 2,
        'react/no-will-update-set-state': 2,
        'react/prefer-es6-class': [2, 'always'],
        'react/prefer-read-only-props': 0,
        'react/prefer-stateless-function': 2,
        'react/prop-types': [
            2,
            {
                ignore: [],
                customValidators: []
            }
        ],
        'react/react-in-jsx-scope': 2,
        'react/require-default-props': 2,
        'react/require-optimization': [0, { allowDecorators: [] }],
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': [
            2,
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
        'react/sort-prop-types': [
            0,
            { ignoreCase: true, callbacksLast: false, requiredFirst: false }
        ],
        'react/state-in-constructor': 0,
        'react/static-property-placement': 0,
        'react/style-prop-object': 2,
        'react/void-dom-elements-no-children': 2
    }
};
