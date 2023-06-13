// 主题样式混入 使用styled-components的ThemeProvider去实现
const them = {
  color: {
    primary: '#c20c0c',
    secondary: ''
  },
  size: {},
  mixin: {
    wrapv1: `
        width: 1100px;
        margin: 0 auto;
        background: red;
    `
  }
};
export default them;
