const alias = require('rollup-plugin-alias')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')

const defaultBabelOptions = require('../config/babelrc.js')

const { name, version, author } = require('../package.json')
// banner
const banner =
  `${'/*!\n' + ' * '}${name}.js v${version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the MIT License.\n` +
  ` */`

function build (input) {
  const babelOptions = Object.assign({}, defaultBabelOptions, {
    runtimeHelpers: true,
    exclude: 'node_modules/**', // only transpile our source code
    plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-object-assign']
  })

  const defaultOptions = {
    plugins: [
      alias({
        resolve: ['.js']
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      resolve(),
      commonjs({
        // non-CommonJS modules will be ignored, but you can also
        // specifically include/exclude files
        include: 'node_modules/**'
      }),
      babel(babelOptions)
    ],
    external: ['tslib']
  }

  if (!input) {
    throw new Error('缺少入口文件')
  }

  return Object.assign({}, defaultOptions, { input })
}

module.exports = {
  build,
  banner
}
