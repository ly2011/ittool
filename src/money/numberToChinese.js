/**
 * @desc 将阿拉伯数字翻译成中文的大写数字
 * @param {Number} num 金额
 * @return {String} 返回中文的大写数字
 * @example
 * numberToChinese(10.222) // 一十点二二二
 */
function numberToChinese (num) {
  let AA = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十')
  let BB = new Array('', '十', '百', '仟', '萬', '億', '点', '')
  let a = ('' + num).replace(/(^0*)/g, '').split('.')
  let k = 0
  let re = ''
  for (let i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re
        break
      case 4:
        if (!new RegExp('0{4}//d{' + (a[0].length - i - 1) + '}$').test(a[0])) re = BB[4] + re
        break
      case 8:
        re = BB[5] + re
        BB[7] = BB[5]
        k = 0
        break
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re
    k++
  }

  if (a.length > 1) {
    // 加上小数部分(如果有小数部分)
    re += BB[6]
    for (let i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)]
  }
  if (re == '一十') re = '十'
  if (re.match(/^一/) && re.length == 3) re = re.replace('一', '')
  return re
}

module.exports = numberToChinese
