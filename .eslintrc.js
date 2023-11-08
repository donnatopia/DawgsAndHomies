module.exports = {
  env: {
      browser: true,
      node: true,
      es2021: true
  },
  plugins: ['react', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'react/prop-types': 'off', // Disable prop-types validation (if you're using PropTypes)
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
  },
}