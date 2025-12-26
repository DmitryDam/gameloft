module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // Для TypeScript
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',             // Базові правила ESLint
    'plugin:react/recommended',       // Правила для React
    'plugin:react-hooks/recommended', // Правила для хуків
    'plugin:@typescript-eslint/recommended', // Правила для TypeScript
    'plugin:prettier/recommended',    // Інтеграція з Prettier
  ],
  settings: {
    react: {
      version: 'detect', // Автоматично визначає версію React
    },
  },
  rules: {
    'prettier/prettier': 'error',           // Показує помилки форматування як помилки ESLint
    'react/react-in-jsx-scope': 'off',      // Не потрібно для React 18+
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Попередження для невикористаних змінних
  },
};