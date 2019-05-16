const alias = require('rollup-plugin-alias')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const typescript = require('rollup-plugin-typescript')

const { name, version, author } = require('../package.json')
// banner
const banner =
  `${'/*!\n' + ' * '}${name}.js v${version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the MIT License.\n` +
  ` */`

function build (input) {
  const defaultOptions = {
    plugins: [
      alias({
        resolve: ['.js', '.jsx', '.ts', '.tsx']
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
      typescript(),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**' // only transpile our source code
      })
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
