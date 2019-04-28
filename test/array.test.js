import assert from 'assert'
import arrayEqual from '../src/array/arrayEqual'
import difference from '../src/array/difference'
import intersection from '../src/array/intersection'
import union from '../src/array/union'

describe('Array API:', function () {
  describe('#arrayEqual()', function () {
    it(`arrayEqual([0, 2, 3, 4], [1, 2, 3]) should return false`, function () {
      assert.notEqual(arrayEqual([0, 2, 3, 4], [1, 2, 3]), true)
    })
    it(`arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
      assert.notEqual(arrayEqual([0, 2, 3], [1, 2, 3]), true)
    })
    it(`arrayEqual([1, 2, 3], [1, 2, 3] should return true)`, function () {
      assert(arrayEqual([1, 2, 3], [1, 2, 3]))
    })
    const arr = [8, 2, 3, 4, 7, 8]
    it(`arrayEqual([${arr}, ${arr}]) should return true`, function () {
      assert(arrayEqual(arr, arr))
    })
  })

  describe('#difference()', () => {
    it(`difference([1, 2, 3], [1, 2, 4]) should return [3]`, () => {
      assert.deepEqual(difference([1, 2, 3], [1, 2, 4]), [3])
    })
  })

  describe('#intersection()', () => {
    it(`intersection([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c']) should return [ 2, 'a']`, () => {
      assert.deepEqual(intersection([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c']), [2, 'a'])
    })
  })

  describe('#union()', () => {
    it(`union([1, 3, 2, 2, 1]) should return [1, 3, 2]`, () => {
      assert.deepEqual(union([1, 3, 2, 2, 1]), [1, 3, 2])
    })
    it(`union([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c']) should return [1, 'a', 3, 4, 'b', 2, 'c']`, () => {
      assert.deepEqual(union([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c']), [1, 'a', 3, 4, 'b', 2, 'c'])
    })
  })
})
