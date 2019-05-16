/**
 *
 * @desc  延时执行
 * @param {Number} second
 */
function sleep(second: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, second)
  })
}

// module.exports = sleep
export default sleep
