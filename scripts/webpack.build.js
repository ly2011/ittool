const path = require('path')
const merge = require('webpack-merge')
const cwd = process.cwd()
const baseConfig = require('./webpack.base.js')
const pkg = require('../package.json')
const babelConfig = require('../config/babelrc')

const rootPath = path.resolve(__dirname, '../')
const resolve = function (dir) {
  return path.resolve(__dirname, '..', dir)
}

const config = merge(baseConfig('production'), {
  mode: 'production', // TODO: 为了方便本地调试，暂时改为开发模式
  context: cwd,
  entry: path.resolve(rootPath, 'src', 'index.ts'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'lib'),
    library: `${pkg.name}`, // 指定类库名,主要用于直接引用的方式(比如使用script 标签)
    libraryTarget: 'umd', // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    // libraryExport: 'default', // 对外暴露default属性，就可以直接调用default里的属性
    umdNamedDefine: true,
    globalObject: 'this' // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { ...babelConfig },
        include: [resolve('examples'), resolve('src')]
      }
    ]
  },
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(rootPath, 'src')
    }
  }
})

module.exports = config
