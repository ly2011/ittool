[![npm version](https://badge.fury.io/js/ittool.svg)](https://badge.fury.io/js/ittool) [![week download](https://img.shields.io/npm/dw/ittool.svg)](https://www.npmjs.com/package/ittool) ![Build Status](https://travis-ci.org/MuYunyun/ittool.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/ittool/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/ittool) ![LICENSE MIT](https://img.shields.io/npm/l/ittool.svg)

前端业务代码工具库

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## :building_construction:  安装使用

1. 直接下载`min`目录下的[ittool.min.js](https://github.com/ly2011/ittool/blob/master/lib/ittool.min.js)使用，支持UMD通用模块规范
2. 使用npm安装

### 浏览器:
``` html
  <script src="ittool.min.js"></script>
  <script>
    var arr1 = [1, 2, 3]
    var arr2 = [1, 2, 3]
    console.log('arrayEqual: ', ittool.arrayEqual(arr1, arr2))
  </script>
```

### npm:

``` bash
$ npm install --save-dev ittool
```

``` javascript
// 完整引入
const ittool = require('ittool')
var arr1 = [1, 2, 3]
var arr2 = [1, 2, 3]
console.log('arrayEqual: ', ittool.arrayEqual(arr1, arr2))
```

**推荐使用方法**

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('ittool/<方法名>')
import { arrayEqual } from "ittool";
// or
// const arrayEqual = require('ittool/arrayEqual')
var arr1 = [1, 2, 3]
var arr2 = [1, 2, 3]
console.log('arrayEqual: ', arrayEqual(arr1, arr2))
```

### 参考资料

1. https://github.com/MuYunyun/blog/issues/9
2. https://github.com/MuYunyun/diana
3. https://github.com/proYang/outils
4. https://segmentfault.com/a/1190000015261753