import Reflux from 'reflux-core'

import RouterApiConf from '../logic/RouterApiConf'
import loadNews from '../logic/loadNews'

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
  const { loadId='N' } = option
      , _conf = RouterApiConf.getApiConf(loadId)
      , { apiKey, adapter, api } = _conf;
  if (apiKey){
    Object.assign(option, { apiKey, adapter, api })
    loadNews(option, this.completed, this.failed)
  } else {
    this.failed({ msg: _conf.msgErr })
  }
})

export default NewsActions
