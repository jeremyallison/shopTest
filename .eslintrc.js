module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-closing-bracket-location': 0,
    'operator-linebreak': 0,
    'react/function-component-definition': 0, // Bug in airbnb rules
    'react/jsx-one-expression-per-line': 0,
    'max-len': 0,
    'arrow-parens': 0,
    'no-unused-expressions': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-mutable-exports': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/no-array-index-key': 0,
    'object-curly-newline': 0,
    'no-console': 0,
    'implicit-arrow-linebreak': 0,
  },
};
