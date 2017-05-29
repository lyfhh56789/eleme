module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //  方法声明括号前后的空格
    'space-before-function-paren': 0,
    'space-before-blocks': 0,
    //  多余的逗号
    'comma-dangle': 0,
    //  结尾分号
    'semi': 0,
    //  中缀操作符周围要不要有空格
    "space-infix-ops": 0,
    //  比较不必使用全等比较运算符
    "eqeqeq": 0,
  }
}
