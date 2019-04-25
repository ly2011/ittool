const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const cwd = process.cwd()
const babelConfig = require('../config/babelrc')
const devMode = process.env.NODE_ENV !== 'production'

const resolve = function(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = mode => ({
  mode,
  context: cwd,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        options: {
          configFile: resolve('.eslintrc.js'),
          failOnError: mode === 'production',
          formatter: require('eslint-friendly-formatter')
        },
        include: [resolve('examples'), resolve('src')],
        exclude: [/node_modules/]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { ...babelConfig },
        include: [resolve('examples'), resolve('src')],
        exclude: file => /node_modules/.test(file) && !/\.vue/.test(file)
      },
      {
        test: /\.css$/,
        use: (devMode ? [] : []).concat([
          {
            loader: 'css-loader',
            options: {
              minimize: mode === 'production'
            }
          }
        ]),
        include: [resolve('examples'), resolve('src')]
      }
    ]
  },
  plugins: [new ProgressBarPlugin()],
  resolve: {
    alias: {
      '@': resolve('examples')
    },
    extensions: ['.js', '.vue'],
    modules: ['node_modules']
  },
  externals: {}
})
