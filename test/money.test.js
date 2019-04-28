import assert from 'assert'
import formatMoney from '../src/money/formatMoney'

describe('money API', () => {
  describe('#formatMoney()', () => {
    it(`formatMoney(239.575) should return 239.58`, () => {
      assert.equal(formatMoney(239.575), 239.58)
    })
  })
})
