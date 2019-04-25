const { BABEL_MODULE, NODE_ENV } = process.env
const useESModules = BABEL_MODULE !== 'commonjs' && NODE_ENV !== 'test'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: useESModules ? false : 'commonjs'
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: false,
        useESModules
      }
    ],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-object-assign',
    ['import', { libraryName: 'ittool', libraryDirectory: 'lib', camel2DashComponentName: false }]
  ]
}
