
git init
npm init -y
npx gitignore node   //this will add .gitignore file



npm i -D ts-node
npm i -D typescript
npm i -D nodemon
npx tsc --init

add this code in tsconfig.json
=====================
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "baseUrl": "./",
    "sourceMap": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "skipLibCheck": true
  }
}
=====================




npm i express 
npm i -D @types/express
 
npm i -D eslint@"^8.56.0"
npm install -D eslint-config-standard
npm install -D eslint-plugin-promise
npx eslint --init
npm i prettierConfig 
npm i prettierPlugin 
npm i @typescript-eslint/parser

add this code in eslint.config.mjs
=====================
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';


export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
=====================


 

Add .prettierrc file and add these settings
=====================
{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": true,
  "printWidth": 80,
  "proseWrap": "always",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
=====================

Add these in vscode setting.json file for the eslint extension to find the linting error


"eslint.experimental.useFlatConfig": true



