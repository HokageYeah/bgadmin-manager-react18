const CracoLessPlugin = require('craco-less');
const { resolve } = require('path');

const pathResolve = (patName) => resolve(__dirname, patName);
console.log(__dirname);
module.exports = {
  // plugins
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  // webpack
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '/#/': pathResolve('types'),
      components: pathResolve('src/components'),
      hooks: pathResolve('src/hooks'),
      router: pathResolve('src/router'),
      store: pathResolve('src/store')
    }
  }
};
