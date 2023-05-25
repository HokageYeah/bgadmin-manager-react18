/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // 将上步骤写在这的prettier 改成现在这个
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module' //  这个一定要加！！ react 不需要必须使用jsx ,加上它可以是写react16以上版本hook写法
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  // rules 里面放入这两句话即可， 原本生成的都去掉
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': ['off']
  }
};
//  ---- 以上是最终eslintrc.cjs 文件的所有内容
