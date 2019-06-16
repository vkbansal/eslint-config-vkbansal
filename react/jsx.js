module.exports = {
    rules: {
        'react/jsx-boolean-value': [2, 'never'],
        'react/jsx-child-element-spacing': 0, // handled by prettier
        'react/jsx-closing-bracket-location': 0, // handled by prettier
        'react/jsx-closing-tag-location': 0, // handled by prettier
        'react/jsx-curly-brace-presence': 0,
        'react/jsx-curly-newline': 0, // handled by prettier
        'react/jsx-curly-spacing': 0, // handled by prettier
        'react/jsx-equals-spacing': 0, // handled by prettier
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js']
            }
        ],
        'react/jsx-first-prop-new-line': 0, // handled by prettier
        'react/jsx-fragments': [2, 'element'],
        'react/jsx-handler-names': [
            2,
            {
                eventHandlerPrefix: 'handle',
                eventHandlerPropPrefix: 'on'
            }
        ],
        'react/jsx-indent': 0, // handled by prettier
        'react/jsx-indent-props': 0, // handled by prettier
        'react/jsx-key': 2,
        'react/jsx-max-depth': 0,
        'react/jsx-max-props-per-line': 0, // handled by prettier
        'react/jsx-no-bind': [
            2,
            {
                ignoreRefs: true,
                allowArrowFunctions: true, // used for when compilation target is greater than es5
                allowBind: false
            }
        ],
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': [
            2,
            {
                ignoreCase: true
            }
        ],
        'react/jsx-no-literals': 0,
        'react/jsx-no-target-blank': 2,
        'react/jsx-no-undef': [
            2,
            {
                allowGlobals: true
            }
        ],
        'react/jsx-one-expression-per-line': 0, // handled by prettier
        'react/jsx-pascal-case': [
            2,
            {
                allowAllCaps: true,
                ignore: []
            }
        ],
        'react/jsx-props-no-multi-spaces': 0, // handled by prettier
        'react/jsx-props-no-spreading': [2, { html: 'enforce', custom: 'ignore' }],
        'react/jsx-sort-default-props': 0,
        'react/jsx-sort-props': 0,
        'react/jsx-space-before-closing': 0, // handled by prettier
        'react/jsx-tag-spacing': 0, // handled by prettier
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 0 // handled by prettier
    }
};
