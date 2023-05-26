/* eslint-disable no-undef */
module.exports = {
  // 配置环境、浏览器、es模块、node环境
  env: {
    browser: true,
    es2021: true,
    node: true
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
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module', //  这个一定要加！！ react 不需要必须使用jsx ,加上它可以是写react16以上版本hook写法
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  // rules 里面放入这两句话即可， 原本生成的都去掉
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': ['off'],
    // 关闭typescript对commonjs的验证
    '@typescript-eslint/no-var-requires': 'off',
    // 关闭any的警告
    '@typescript-eslint/no-explicit-any': 'off',
    // 除需要转义的情况外，字符串统一使用单引号 'jsx-quotes': [2, 'prefer-single'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ]
  }
};
//  ---- 以上是最终eslintrc.cjs 文件的所有内容
