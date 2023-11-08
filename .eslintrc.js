module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  rules: {
    'react/prop-types': 'off', // Disable prop-types validation (if you're using PropTypes)
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
