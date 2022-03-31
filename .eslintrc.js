module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  plugins: [
    'react'
  ],
  rules: {
    'linebreak-style': 0,
    'comma-dangle': ['error', 'never'],
    'react/prop-types': 0
    // 'import/no-cycle': ['error', { maxDepth: 10 }]
  }
};
