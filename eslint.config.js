import eslint from 'eslint';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import eslintPluginVue from 'eslint-plugin-vue';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginJson from 'eslint-plugin-json';
import eslintConfigPrettier from 'eslint-config-prettier';
    
export default [
  {
    ignores: ['node_modules/**', 'dist/**','package.json', '.vitepress/dist/**']
  },
  // TypeScript 文件配置
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      // TypeScript 规则
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-non-null-assertion': 'warn',
      
      // 基础规则
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
      // 移除与Prettier冲突的规则
    }
  },
  // Vue 文件配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: eslintPluginVue.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'vue': eslintPluginVue
    },
    rules: {
      // Vue 规则
      'vue/multi-word-component-names': 'warn',
      'vue/no-unused-components': 'error',
      'vue/no-unused-vars': 'error',
      'vue/require-default-prop': 'error',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/html-indent': ['error', 2],
      'vue/html-self-closing': 'error',
      'vue/max-attributes-per-line': ['error', {
        'singleline': 3,
        'multiline': 1
      }],
      'vue/no-multiple-template-root': 'off',
      'vue/script-setup-uses-vars': 'error'
    }
  },
  // Prettier 配置
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue', '**/*.json'],
    plugins: {
      'prettier': eslintPluginPrettier,
      'json': eslintPluginJson
    },
    rules: {
      'prettier/prettier': ['error', {
        'singleQuote': true,
        'semi': true,
        'tabWidth': 2,
        'trailingComma': 'none',
        'printWidth': 100,
        'bracketSpacing': true,
        'arrowParens': 'always',
        'endOfLine': 'auto'
      }]
    }
  },
  // 使用eslint-config-prettier关闭所有与prettier冲突的规则
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue', '**/*.json'],
    ...eslintConfigPrettier
  },
  // 特定目录配置 - packages 目录
  {
    files: ['packages/**/*.ts', 'packages/**/*.tsx', 'packages/**/*.vue'],
    plugins: {
    },
    rules: {
      // 可以在这里添加针对 packages 目录的特定规则
      'no-console': 'error', // 关闭原始的no-console规则
      'no-debugger': 'error', // 组件库中禁止使用debugger
      '@typescript-eslint/explicit-module-boundary-types': 'error' // 组件库中要求导出函数和类的公共类方法的显式返回和参数类型
    }
  }
];