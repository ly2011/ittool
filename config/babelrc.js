const { BABEL_MODULE, NODE_ENV } = process.env
const useESModules = BABEL_MODULE !== 'commonjs' && NODE_ENV !== 'test'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 0.1%']
        },
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
    '@babel/plugin-transform-modules-commonjs', // https://github.com/webpack/webpack/issues/4039
    ['import', { libraryName: 'ittool', libraryDirectory: 'lib', camel2DashComponentName: false }]
  ]
}
