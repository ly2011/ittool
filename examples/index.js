/* eslint-disable */
import { arrayEqual, union, get, omit, pick } from '../'

var arr1 = [1, 2, 3]
var arr2 = [1, 2, 3]
console.log('arrayEqual: ', arrayEqual(arr1, arr2))
var uniqArr = union([1, 2, 3], [4, 3, 2], [4, 5, 6, 8], [[1, 3], [4, 7]])
console.log('union', uniqArr, uniqArr.length)
// var object = { a: [{ b: { c: 3 } }] }
// console.log(get(object, 'a[0].b.c')) // => 3
// console.log(get(object, ['a', '0', 'b', 'c']))
// console.log(get(object, 'a.b.c', 'default'))
var object = { a: 1, b: '2', c: 3 }
console.log(omit(object, ['a', 'c'])) // => { 'b': '2' }
console.log(omit(object, 'a')) //  => { b: "2", c: 3 }
console.log(pick(object, ['a', 'c'])) // => { 'a': 1, 'c': 3 }
/* eslint-enable */
