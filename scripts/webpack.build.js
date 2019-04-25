const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const path = require('path')

const cwd = process.cwd()
const pkg = require('../package.json')
const babelConfig = require('../config/babelrc')

const rootPath = path.resolve(__dirname, '../')

const config = {
  mode: 'development', // TODO: 为了方便本地调试，暂时改为开发模式
  context: cwd,
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'lib'),
    library: `${pkg.name}`,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { ...babelConfig }
      }
    ]
  },
  plugins: [new ProgressBarPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(rootPath, 'src')
    },
    extensions: ['.js'],
    modules: ['node_modules']
  }
}

module.exports = config
