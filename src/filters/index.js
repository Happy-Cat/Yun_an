// const BigNumber = require('bignumber.js');
import BigNumber from '@/utils/BN';
import { isNumber } from '@/utils';

/**
 * 千分位格式化
 * @param {Number} num
 */
export function formatNumber(num, precision = 2, abs = false) {
  if (!isNumber(num)) {
    return '- -';
  }
  if (num === 0) {
    return '- -';
  }
  if (num === '0') {
    return '0';
  }
  if (!(num instanceof BigNumber)) {
    num = BigNumber(num);
  }
  if (num.isNaN()) {
    return 0;
  }
  if (isNumber(precision) && typeof precision === 'string') {
    precision = Number(precision);
  }
  // abs
  if (abs) {
    num = num.abs();
  }
  const [intNum, decimalNum] = num.toFixed(precision).split('.');
  // 将整数部分逢三一断
  const intNumber = intNum.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  if (decimalNum) {
    return `${intNumber}.${decimalNum}`;
  }
  return intNumber;
}

/**
 * 整数format整齐格式，如1格式化为01，3格式化为03，10格式化为10
 * @param {Number} num 数值
 * @param {Number} length 需要保留的位数
 */
export function formatPrefixInteger(num, length = 2) {
  return (Array(length).join('0') + num).slice(-length);
}

export function toUpperCase(str) {
  if (typeof str === 'string') {
    return str.toUpperCase();
  }
  return str;
}
/**
 * 格式化地址
 * @param {*} address 账户地址，例如0x61Fe0f1D58d95075EE53348Ae993Ec669DA32640
 * @param {*} start 开始截取长度，默认为6
 * @param {*} end 末尾截取长度，默认为4
 * @returns 截取后的账户地址，如0x61Fe***2640
 */
export function toShortAddress(address, start = 6, end = 4) {
  if (typeof address === 'string' && address.trim()) {
    const str = address.trim();
    return `${str.substr(0, start)}...${str.substr(-end, end)}`;
  }
  return address;
}
