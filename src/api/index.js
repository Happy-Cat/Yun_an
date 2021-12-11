import {
  arbitrumApiUrl,
} from '@/config';

import { get, post } from './request';

// 查询dft数据
export const queryDftData = (params) => get('/website/queryDftData', params);
// 全网累计成交量
export const queryTotalDealNum = (params) => get('/website/queryTotalDealNum', params);
// 查询轮播图配置数据
export const queryWebsiteShufflingFigureConfig = (params) => get('/website/queryWebsiteShufflingFigureConfig', params);
// 查询symbol配置数据
export const queryWebsiteSymbolConfig = (params) => get('/website/queryWebsiteSymbolConfig', params);
// 获取新闻列表
export const queryNewsList = (params) => get('/sitenews/queryNewsList', params, { baseURL: arbitrumApiUrl });
// 添加用户意见反馈
export const addUserContactRecord = (params) => post('/user/addUserContactRecord', params, { baseURL: arbitrumApiUrl });