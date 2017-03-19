module.exports = {
    rules: {
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-closing-bracket-location': ['error', 'after-props'],
        'react/jsx-curly-spacing': [
            'error',
            'never',
            {
                allowMultiline: true
            }
        ],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js']
            }
        ],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-handler-names': [
            'error',
            {
                eventHandlerPrefix: 'handle',
                eventHandlerPropPrefix: 'on'
            }
        ],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-key': 'error',
        'react/jsx-max-props-per-line': ['off', { maximum: 1 }],
        'react/jsx-no-bind': [
            'error',
            {
                ignoreRefs: true,
                allowArrowFunctions: true, // used for when compilation target is greater than es5
                allowBind: false
            }
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': [
            'error',
            {
                ignoreCase: true
            }
        ],
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': [
            'error',
            {
                allowAllCaps: true,
                ignore: []
            }
        ],
        'react/jsx-sort-props': [
            'off',
            {
                ignoreCase: true,
                callbacksLast: false,
                shorthandFirst: false,
                shorthandLast: false
            }
        ],
        'react/jsx-space-before-closing': ['error', 'always'],
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never'
            }
        ],
        'react/jsx-uses-react': ['error'],
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: true,
                assignment: true,
                return: true
            }
        ]
    }
};
