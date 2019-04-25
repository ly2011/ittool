const path = require('path')
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const copy = require('copy')
const chalk = require('chalk')

const rootPath = path.resolve(__dirname, '../')
const libPath = path.resolve(rootPath, 'lib')

// 替换模块文件
let copying = ora('copying...')
copying.start()
rm(path.resolve(rootPath, 'lib', '*.js'), err => {
  if (err) throw (err)
  let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
  folderList.forEach((item, index) => {
    copy(`src/${item}/*.js`, libPath, function (err, files) {
      if (err) throw err;
      if (index === folderList.length - 1) {
        console.log(chalk.cyan('  Copy complete.\n'))
        copying.stop()
      }
    })
  })
})