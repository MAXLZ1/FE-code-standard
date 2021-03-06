module.exports = {
  rules: {
    'accessor-pairs': 1,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'complexity': [0, 10],
    'consistent-return': 1,
    'curly': 2,
    'default-case': 2,
    'default-param-last': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': 2,
    'guard-for-in': 1,
    'no-alert': 2,
    'no-caller': 2,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-floating-decimal': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-lone-blocks': 2,
    'no-multi-spaces': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
    'no-multi-str': 2,
    'no-new': 1,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-param-reassign': [2, {
      props: true,
      ignorePropertyModificationsFor: [
        "state", // vuex mutations params
        "e", // event object shorthand
        "event" // event object
      ]
    }],
    'no-proto': 2,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-return': 2,
    'no-void': 2,
    'prefer-promise-reject-errors': 2,
    'radix': [2, 'as-needed'],
    'require-await': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'inside', {
      functionPrototypeMethods: true
    }],
    'yoda': 2
  }
}
