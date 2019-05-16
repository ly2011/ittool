const path = require('path')
// const fs = require('fs')
const fg = require('fast-glob')
const ora = require('ora')
const rm = require('rimraf')
// const copy = require('copy')
const chalk = require('chalk')

const { rollup } = require('rollup')
const { build: buildRollupOptions } = require('./rollup.js')

const rootPath = path.resolve(__dirname, '../')
// const libPath = path.resolve(rootPath, 'lib')

// 替换模块文件
// let copying = ora('copying...')
// copying.start()
// rm(path.resolve(rootPath, 'lib', '*.js'), err => {
//   if (err) throw (err)
// let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
// folderList.forEach((item, index) => {
// copy(`src/${item}/*.js`, libPath, function (err, files) {
//   if (err) throw err;
//   if (index === folderList.length - 1) {
//     console.log(chalk.cyan('  Copy complete.\n'))
//     copying.stop()
//   }
// })
// console.log('file: ', item)
// })
// })

// 替换模块文件
let copying = ora('copying...')
copying.start()
rm(path.resolve(rootPath, 'lib', '*.*'), err => {
  if (err) throw err
  fg([path.resolve(rootPath, 'src/**/*.ts'), `!${path.resolve(rootPath, 'src/index.ts')}`]).then(async entries => {
    try {
      for (const item of entries) {
        const fileName = path.basename(item).replace('ts', 'js')
        const result = await rollup(buildRollupOptions(item))
        await result.write({
          file: `lib/${fileName}`,
          format: 'cjs'
        })
      }
    } catch (error) {
      console.error('发生错误：', error)
    } finally {
      console.log(chalk.cyan('  Copy complete.\n'))
      copying.stop()
    }
  })
})
