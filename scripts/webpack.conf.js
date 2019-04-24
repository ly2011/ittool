const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const path = require('path')

const cwd = process.cwd()
const pkg = require('../package.json')
const babelConfig = require('../config/babelrc')

const rootPath = path.resolve(__dirname, '../')

const config = {
  mode: 'production',
  context: cwd,
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: `${pkg.name}.min.js`,
        path: path.resolve(rootPath, 'lib'),
        library: `${pkg.name}`,
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
          loader: "babel-loader",
          options: { ...babelConfig }
        }]
  },
  plugins: [
    new ProgressBarPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(rootPath, 'src')
    },
    extensions: ['.js'],
    modules: ['node_modules']
},
}

module.exports = config