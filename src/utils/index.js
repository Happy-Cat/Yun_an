// 判断是否为数字
export const isNumber = (value) => {
  if (typeof value === 'string' && value === '') {
    return false;
  }
  return !Number.isNaN(Number(value));
};