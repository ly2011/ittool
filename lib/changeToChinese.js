'use strict';

/**
 * @desc 将数字转换为大写金额
 * @param {Number} num 金额
 * @return {String} 转为大写的金额
 * @example
 * changeToChinese(369.21) // 叁佰陆拾玖元贰角壹分
 */
function changeToChinese(num) {
  // 判断如果传递进来的不是字符的话转换为字符
  if (typeof num === 'number') {
    num = new String(num);
  }

  num = num.replace(/,/g, ''); // 替换tomoney()中的“,”

  num = num.replace(/ /g, ''); // 替换tomoney()中的空格

  num = num.replace(/￥/g, ''); // 替换掉可能出现的￥字符

  if (isNaN(num)) {
    // 验证输入的字符是否为数字
    // alert("请检查小写金额是否正确");
    return '';
  } // 字符处理完毕后开始转换，采用前后两部分分别转换


  var part = String(num).split('.');
  var newchar = ''; // 小数点前进行转化

  for (var i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 16 || part[0] > Number.MAX_SAFE_INTEGER) {
      return ''; // 若数量超过拾亿单位，提示
    }

    var _tmpnewchar = '';

    var _perchar = part[0].charAt(i);

    switch (_perchar) {
      case '0':
        _tmpnewchar = '零' + _tmpnewchar;
        break;

      case '1':
        _tmpnewchar = '壹' + _tmpnewchar;
        break;

      case '2':
        _tmpnewchar = '贰' + _tmpnewchar;
        break;

      case '3':
        _tmpnewchar = '叁' + _tmpnewchar;
        break;

      case '4':
        _tmpnewchar = '肆' + _tmpnewchar;
        break;

      case '5':
        _tmpnewchar = '伍' + _tmpnewchar;
        break;

      case '6':
        _tmpnewchar = '陆' + _tmpnewchar;
        break;

      case '7':
        _tmpnewchar = '柒' + _tmpnewchar;
        break;

      case '8':
        _tmpnewchar = '捌' + _tmpnewchar;
        break;

      case '9':
        _tmpnewchar = '玖' + _tmpnewchar;
        break;
    }

    switch (part[0].length - i - 1) {
      case 0:
        _tmpnewchar = _tmpnewchar + '元';
        break;

      case 1:
        if (_perchar != 0) _tmpnewchar = _tmpnewchar + '拾';
        break;

      case 2:
        if (_perchar != 0) _tmpnewchar = _tmpnewchar + '佰';
        break;

      case 3:
        if (_perchar != 0) _tmpnewchar = _tmpnewchar + '仟';
        break;

      case 4:
        _tmpnewchar = _tmpnewchar + '万';
        break;

      case 5:
        if (_perchar != 0) _tmpnewchar = _tmpnewchar + '拾';
        break;

      case 6:
        if (_perchar != 0) _tmpnewchar = _tmpnewchar + '佰';
        break;

      case 7:
        if (_perchar != 0) _tmpnewchar = _tmpnewchar + '仟';
        break;

      case 8:
        _tmpnewchar = _tmpnewchar + '亿';
        break;

      case 9:
        _tmpnewchar = _tmpnewchar + '拾';
        break;
    }

    newchar = _tmpnewchar + newchar;
  } // 小数点之后进行转化


  if (num.indexOf('.') != -1) {
    if (part[1].length > 2) {
      // alert("小数点之后只能保留两位,系统将自动截断");
      part[1] = part[1].substr(0, 2);
    }

    for (var _i = 0; _i < part[1].length; _i++) {
      tmpnewchar = '';
      perchar = part[1].charAt(_i);

      switch (perchar) {
        case '0':
          tmpnewchar = '零' + tmpnewchar;
          break;

        case '1':
          tmpnewchar = '壹' + tmpnewchar;
          break;

        case '2':
          tmpnewchar = '贰' + tmpnewchar;
          break;

        case '3':
          tmpnewchar = '叁' + tmpnewchar;
          break;

        case '4':
          tmpnewchar = '肆' + tmpnewchar;
          break;

        case '5':
          tmpnewchar = '伍' + tmpnewchar;
          break;

        case '6':
          tmpnewchar = '陆' + tmpnewchar;
          break;

        case '7':
          tmpnewchar = '柒' + tmpnewchar;
          break;

        case '8':
          tmpnewchar = '捌' + tmpnewchar;
          break;

        case '9':
          tmpnewchar = '玖' + tmpnewchar;
          break;
      }

      if (_i == 0) tmpnewchar = tmpnewchar + '角';
      if (_i == 1) tmpnewchar = tmpnewchar + '分';
      newchar = newchar + tmpnewchar;
    }
  } // 替换所有无用汉字


  while (newchar.search('零零') != -1) {
    newchar = newchar.replace('零零', '零');
  }

  newchar = newchar.replace('零亿', '亿');
  newchar = newchar.replace('亿万', '亿');
  newchar = newchar.replace('零万', '万');
  newchar = newchar.replace('零元', '元');
  newchar = newchar.replace('零角', '');
  newchar = newchar.replace('零分', '');

  if (newchar.charAt(newchar.length - 1) == '元') {
    newchar = newchar + '整';
  }

  return newchar;
}

module.exports = changeToChinese;
