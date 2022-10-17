import {
  NAT_LOAD_NEWS_COMPLETED,
  NAT_UPDATE_NEWS
} from '../actions/NewsActions';
import ComponentActions from '../actions/ComponentActions';
import {
  LPAT_LOADING,
  LPAT_LOADING_COMPLETE,
  LPAT_LOADING_FAILED
} from '../actions/LoadingProgressActions';

import {
  loadNewsCompleted,
  removeAllNews,
  removeNews,
  removeUnderNews
} from './NewsSliceFn';

const NewsSlice = {
  news: {},

  onLoadNews(option={}){
    ComponentActions.showNewsPane(option.itemConf)
    this.triggerLoadingProgress(LPAT_LOADING)
  },
  onLoadNewsCompleted({ news, itemConf }){
    if (news) {
      const r = loadNewsCompleted(this.news, news);
      this.trigger(NAT_LOAD_NEWS_COMPLETED, r)
    }
    this.triggerLoadingProgress(LPAT_LOADING_COMPLETE)
  },
  onLoadNewsFailed(option){
    ComponentActions.showModalDialog('ALERT_DIALOG', option)
    this.triggerLoadingProgress(LPAT_LOADING_FAILED)
  },


  onRemoveNews(item){
    removeNews(this.news, item)
  },
  onRemoveAllNews(paneId){
    const r = removeAllNews(this.news, paneId)
    this.trigger(NAT_LOAD_NEWS_COMPLETED, r)
  },
  onRemoveUnderNews(item){
    const r = removeUnderNews(this.news, item)
    this.trigger(NAT_UPDATE_NEWS, r)
    //this.trigger(NAT_LOAD_NEWS_COMPLETED, r)
  }

}

export default NewsSlice
