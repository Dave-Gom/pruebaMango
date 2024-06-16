module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  rules: {
    'eol-last': 0,
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    'react-hooks/exhaustive-deps': 'off',
  },
};
