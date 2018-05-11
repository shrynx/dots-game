module.exports = {
  extends: [
    'react-app',
    'prettier',
    'prettier/standard',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  plugins: ['flowtype', 'prettier'],
  rules: {
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        semi: true,
      },
    ],
  },
};
