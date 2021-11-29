import Reflux from 'reflux-core'

import RouterApiConf from '../logic/RouterApiConf'
import loadNews from '../logic/loadNews'

const _assign = Object.assign;

export const TYPES = {
  LOAD_NEWS: 'loadNews',
  LOAD_NEWS_COMPLETED: 'loadNewsCompleted',
  LOAD_NEWS_FAILED: 'loadNewsFailed',

  REMOVE_NEWS: 'removeNews',
  REMOVE_ALL_NEWS: 'removeAllNews',
  REMOVE_UNDER_NEWS: 'removeUnderNews'
}

const NewsActions = Reflux.createActions({
  [TYPES.LOAD_NEWS] : {
    children: ['completed', 'failed']
  },
  [TYPES.REMOVE_NEWS]: {},
  [TYPES.REMOVE_ALL_NEWS]: {},
  [TYPES.REMOVE_UNDER_NEWS]: {}
})

NewsActions[TYPES.LOAD_NEWS].listen(function(option={}){
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

export default NewsActions
