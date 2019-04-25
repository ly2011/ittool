import { arrayEqual, union } from 'ittool'
// const arrayEqual = require('ittool/arrayEqual')

var arr1 = [1, 2, 3]
var arr2 = [1, 2, 3]
console.log('arrayEqual: ', arrayEqual(arr1, arr2))
var uniqArr = union([1, 2, 3], [4, 3, 2], [4, 5, 6, 8], [[1, 3], [4, 7]])
console.log('union', uniqArr, uniqArr.length)
