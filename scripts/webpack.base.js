const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

const cwd = process.cwd()
const babelConfig = require('../config/babelrc')
const pkg = require('../package.json')
const devMode = process.env.NODE_ENV !== 'production'

const resolve = function (dir) {
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
        test: /\.tsx?$/,
        use: ['ts-loader'],
        include: [resolve('examples'), resolve('src')],
        exclude: /node_modules/
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
  plugins: [
    new ProgressBarPlugin(),
    new webpack.BannerPlugin({
      banner: `${pkg.name} ${pkg.version}\n${pkg.homepage}`
    }),
    new CheckerPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve('examples')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'json', '.vue'],
    modules: ['node_modules']
  },
  externals: {}
})
