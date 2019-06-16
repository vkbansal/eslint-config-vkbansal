module.exports = {
    rules: {
        'accessor-pairs': 0,
        'array-callback-return': 2,
        'block-scoped-var': 2,
        'class-methods-use-this': 0,
        complexity: [0, 11],
        'consistent-return': 2,
        curly: 0, // handled by prettier
        'default-case': [2, { commentPattern: '^no default$' }],
        'dot-location': 0, // handled by prettier
        'dot-notation': [2, { allowKeywords: true }],
        eqeqeq: [2, 'always'],
        'guard-for-in': 2,
        'max-classes-per-file': [2, 1],
        'no-alert': 'warn',
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 0,
        'no-else-return': 2,
        'no-empty-function': [2, { allow: ['arrowFunctions', 'functions', 'methods'] }],
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 0, // handled by prettier
        'no-global-assign': [2, { exceptions: [] }],
        'no-implicit-coercion': [2, { boolean: false, number: true, string: true, allow: [] }],
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 0,
        'no-iterator': 2,
        'no-labels': [2, { allowLoop: false, allowSwitch: false }],
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-magic-numbers': [2, { ignore: [], ignoreArrayIndexes: true, enforceConst: true, detectObjects: false }],
        'no-multi-spaces': 0, // handled by prettier
        'no-multi-str': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-param-reassign': [
            2,
            {
                props: true,
                ignorePropertyModificationsFor: ['acc', 'e', 'ctx', 'req', 'request', 'res', 'response', '$scope']
            }
        ],
        'no-proto': 2,
        'no-redeclare': 2,
        'no-restricted-properties': [
            2,
            {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated'
            },
            {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.'
            },
            {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.'
            },
            {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.'
            }
        ],
        'no-return-assign': 2,
        'no-return-await': 2,
        'no-script-url': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 0,
        'no-unused-expressions': [2, { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false }],
        'no-unused-labels': 2,
        'no-useless-call': 0,
        'no-useless-catch': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-useless-return': 2,
        'no-void': 2,
        'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
        'no-with': 2,
        'prefer-named-capture-group': 0,
        'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],
        radix: 2,
        'require-await': 2,
        'require-unicode-regexp': 0,
        'vars-on-top': 2,
        'wrap-iife': 0, // handled by prettier
        yoda: [2, 'never', { exceptRange: true, onlyEquality: true }]
    }
};
