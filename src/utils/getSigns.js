import CryptoJS from 'crypto-js';
import axios from 'axios';
import { apiBaseUrl } from '@/config';

// const { accessInfo } = config;

export default async function () {
  let nowTime = sessionStorage.getItem('nowTime');
  const localNowTime = Date.now();
  if (!nowTime) {
    try {
      const { data } = await axios.get(`${apiBaseUrl}/website/getSysUnixTime`);
      nowTime = data.data;
      sessionStorage.setItem('nowTime', nowTime);
      setTimeout(() => {
        sessionStorage.removeItem('nowTime');
      }, 60000);
    } catch (error) {
      console.log('获取服务器时间接口请求失败，捕获', error);
    }
  }
  const signKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDcGFoNEe1YWDcr1eg3zLmlENvk';
  const ip = localStorage.getItem('Ip') || '127.0.0.1';
  const apiTime = nowTime || localNowTime;
  const ua = navigator.userAgent;
  const random = Math.floor(Math.random() * 10 + 1);
  const deviceInfo = CryptoJS.MD5(ip + ua + random).toString(CryptoJS.enc.Hex);
  // const token = 'testtoken2020';
  const token = CryptoJS.MD5(signKey + apiTime + deviceInfo).toString(CryptoJS.enc.Hex);
  return {
    apiTime,
    deviceInfo,
    token,
  };
}
// export const getAccessInfo = () => {
//   const { accessKey, accessSk } = accessInfo;
//   const accessTime = Date.now();
//   const token = CryptoJS.MD5(`${accessKey}&${accessTime}&${accessSk}`);
//   return {
//     accessKey,
//     accessTime,
//     token,
//   };
// };
