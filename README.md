# 项目汇总：(create-react-app 搭建项目)

## 一、代码规范

> ### 1.1、继承 editorconfig 配置

- editorconfig 有主语为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

```shell
root = true

[*] #便是所有文件使用
charset=utf-8 # 设置文件字符集为 utf-8
indent_style=space # 缩进风格（tab ｜ space）
indent_size=2 # 缩紧大小
end_of_line=lf # 控制换行类型（lf ｜ cr ｜ crlf）
insert_final_newline=true # 去除行尾的任意空白字符
trim_trailing_whitespace = true # 始终在文件末尾插入一个新行
max_line_length = 100

[*.{yml,yaml,json}]
indent_style = space
indent_size = 2

[*.md] # 表示仅 md 文件适用以下规则
trim_trailing_whitespace = false
max_line_length = off

[Makefile]
indent_style = tab
```

> ### 1.3、使用 prettier 工具

①、安装 prettier

```shell
 npm install prettier -D
```

②、配置.prettierrc 文件：

- useTabs: 使用 tab 缩进还是空格缩进，选择 false
- tabWidth：tab 是空格的情况下，是几个空格，选择 2 个
- printWidth： 当前行字符的长度，推荐 80，也有喜欢 100 或者 120
- singleQuote：使用单引号还是双引号，选择 true，使用单引号
- trailingComma：在多行输入的尾逗号是否添加，设置为 none，比如对象类型的最后一个属性后面是否添加一个,号。'all' 表示所有情况都添加逗号。
- semi：语句末尾是否要加分号，默认值 true，选择 false 表示不加。
- vueIndentScriptAndStyle： 在 Vue 单文件组件中，控制是否对 <script> 和 <style> 标签进行缩进处理，设置为 true 表示缩进，设置为 false 表示不缩进。
- proseWrap：控制是否换行，默认为 'preserve'，表示按照原样保留换行符；'never' 表示不换行；'always' 表示总是换行。
- htmlWhitespaceSensitivity： 控制 HTML 中空白符的敏感度，'strict' 表示敏感，会根据构建实际情况处理空白符；'ignore' 表示不敏感，会将所有的空白符视为一样。
- endOfLine：控制行尾换行符的风格，'auto' 表示自动检测并使用当前操作系统的换行符，'lf' 表示使用 LF 作为换行符，'crlf' 表示使用 CRLF 作为换行符。
- wrap_attributes："auto" 自动格式化 HTML、JSX 属性的折行方式。
- bracketSpacing：false 在对象字面量的花括号之间不添加空格。
- jsxBracketSameLine: true 将 JSX 元素的闭合符号放在同一行。
- overrides: [{ "files": ".prettierrc", "options": { "parser": "json" } }]: 定义针对 .prettierrc 文件的特定选项，使用 JSON 解析器对此文件进行解析。
这些配置选项可以根据个人偏好和项目要求进行自定义。将该配置文件放置在项目根目录下，Prettier 就会按照这些规则格式化代码。
- wrap_line_length: 120: 以 120 个字符为阈值自动折行。
- arrowParens: "avoid": 在箭头函数参数只有一个时，不添加括号。


③、创建.prettierignore 忽略文件

```shell
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
# 然后配置一个.prettierignore文件，
# 因为上面的命令是让所有的代码都执行prettier的格式化，
# 但是对于nodemodules一些文件不需要格式化，所以要配置忽略文件 
```

④、vscode 配置：

- 设置中搜索 editor default。
- 在 Default Formatter 中配置 Prettier -Code formatter

> ### 1.2、添加 eslint 搭建格式化代码的配置

- （代码使用 eslint 教研，要在 vscode 中下载插件）
- 添加了.eslintrc.cjs、.prettierignore、.prettierrc.json 配置文件。
- .eslintrc.cjs 文件生成使用命令：

  ```shell
  npx eslint --init
  ```

- 开发环境添加第三方库，具体配置参考如下链接：
  [VSCode 中使用 Eslint+React+TS+Vite 搭建项目](https://blog.csdn.net/qq_44754016/article/details/129966102)、
  [react18-代码规范-ts-仿网易云项目](https://blog.csdn.net/wyh666csdn/article/details/128676975)
