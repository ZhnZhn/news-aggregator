import Reflux from 'reflux'

import Store from '../stores/Store'
import RouterLoad from '../logic/RouterLoad'

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
      , _apiNewsKey = Store.getNewsKey();
  if (_apiNewsKey){
    option.apiNewsKey = _apiNewsKey
    RouterLoad[loadId](option, this.completed, this.failed)
  } else {
    this.failed({ msg: "NewsApi Key is not set. \nPlease, set and try again." })
  }
})

export default NewsActions
