const defaultEnv = 'production';
const supportedEnvs = ['development', 'production'];
const currentEnv = supportedEnvs.includes(process.env.NODE_ENV) ? process.env.NODE_ENV : defaultEnv;
const isDevelopment = currentEnv === 'development';

module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['import', 'unicorn', 'sort-keys-fix'],
  extends: ['airbnb-base', 'plugin:import/recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'lib'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: ['jest.config.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/**/*.json'],
      rules: {
        'no-unused-expressions': 'off',
        'prettier/prettier': 'off',
      },
    },
  ],
  rules: {
    'global-require': 'off',
    'no-await-in-loop': 'off',
    'newline-before-return': 'error',
    camelcase: ['error', { properties: 'always' }],
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': isDevelopment
      ? 'off'
      : [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false,
          },
        ],
    'no-alert': isDevelopment ? 'off' : 'error',
    'no-console': isDevelopment ? 'off' : 'error',
    'no-debugger': isDevelopment ? 'off' : 'error',

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        useTabs: false,
        semi: true,
        trailingComma: 'all',
        bracketSpacing: true,
        printWidth: 120,
        endOfLine: 'lf',
      },
    ],

    'sort-keys-fix/sort-keys-fix': 'warn',

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        pathGroups: [
          {
            pattern: '@',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/throw-new-error': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/error-message': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/custom-error-definition': 'error',
  },
};
