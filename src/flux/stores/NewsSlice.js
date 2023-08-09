import {
  NAT_LOAD_NEWS_COMPLETED,
  NAT_UPDATE_NEWS
} from '../actions/NewsActions';
import {
  ComponentActions
} from '../actions/ComponentActions';
import {
  showAlertDialog
} from '../compStore';

import {
  setLoading,
  setLoadingComplete,
  setLoadingFailed
} from '../storeAtoms';

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
    setLoading()
  },
  onLoadNewsCompleted({ news, itemConf }){
    if (news) {
      const r = loadNewsCompleted(this.news, news);
      this.trigger(NAT_LOAD_NEWS_COMPLETED, r)
    }
    setLoadingComplete()
  },
  onLoadNewsFailed(option){
    showAlertDialog(option)
    setLoadingFailed()
  },

  onRemoveNews(item){
    removeNews(this.news, item)
  },
  onRemoveAllNews(paneId){
    const r = removeAllNews(this.news, paneId)
    this.trigger(NAT_UPDATE_NEWS, r)
  },
  onRemoveUnderNews(item){
    const r = removeUnderNews(this.news, item)
    this.trigger(NAT_UPDATE_NEWS, r)
  }

}

export default NewsSlice
