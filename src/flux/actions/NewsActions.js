import Reflux from 'reflux-core';

import RouterApiConf from '../logic/RouterApiConf';
import loadNews from '../logic/loadNews';

const _assign = Object.assign;

export const NAT_LOAD_NEWS_COMPLETED = 'loadNewsCompleted'
export const NAT_UPDATE_NEWS = 'updateNews'

const NAT_LOAD_NEWS = 'loadNews'
, NAT_REMOVE_NEWS = 'removeNews'
, NAT_REMOVE_ALL_NEWS = 'removeAllNews'
, NAT_REMOVE_UNDER_NEWS = 'removeUnderNews';

const _NewsActions = Reflux.createActions({
  [NAT_LOAD_NEWS]: {
    children: ['completed', 'failed']
  },
  [NAT_REMOVE_NEWS]: {},
  [NAT_REMOVE_ALL_NEWS]: {},
  [NAT_REMOVE_UNDER_NEWS]: {}
})

_NewsActions[NAT_LOAD_NEWS].listen(function(option={}){
  const {
    apiKey,
    adapter,
    api,
    msgErr
  } = RouterApiConf.getApiConf(option.loadId || 'N');
  if (apiKey){
    _assign(option, { apiKey, adapter, api })
    loadNews(option, this.completed, this.failed)
  } else {
    this.failed({ msg: msgErr })
  }
})

export const NewsActions = _NewsActions
