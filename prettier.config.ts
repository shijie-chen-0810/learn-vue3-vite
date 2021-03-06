module.exports = {
  semi: false, // 声明结尾使用分号(默认true)
  singleQuote: true, // 使用单引号（默认false）
  trailingComma: "none", // 多行使用拖尾逗号（默认none）
  printWidth: 100, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）ab进行缩进（默认false）
  useTabs: false, // 是否使用t
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如 x => x
  // always 总是有括号
  arrowParens: "avoid",
  endOfLine: "auto", // 因为prettier的规范和eslint的换行规则不同，所以这个必须配置。要不然每次打开文件都会有一堆的警告
};
