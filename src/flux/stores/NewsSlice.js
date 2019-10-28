
import { TYPES } from '../actions/NewsActions'
import ComponentActions from '../actions/ComponentActions'
import {TYPES as LP} from '../actions/LoadingProgressActions'

const Logic = {
  loadNewsCompleted(slice, news){
    const { source, articles=[], sortBy } = news;
    slice[source] = slice[source]
      ? articles.concat(slice[source])
      : articles
    return {
      id: source,
      data: slice[source],
      sortBy: sortBy
    };
  },

  removeAllNews(slice, paneId){
    slice[paneId] = []
    return {
      id: paneId,
      data: slice[paneId],
      sortBy: ''
    };
  },

  removeNews(slice, item){
    const { id, source } = item;
    slice[source] = slice[source]
      .filter(article => article.articleId !== id)
  },

  removeUnderNews(slice, item){
    const { articleId, source } = item;
    const _underIndex = slice[source]
      .findIndex(article => article.articleId === articleId);

    slice[source] = slice[source].slice(_underIndex+1)
    return {
      id: source,
      data: slice[source]
    };
  }

}

const NewsSlice = {
  news: {},

  onLoadNews(option={}){
    ComponentActions.showNewsPane(option.itemConf)
    this.triggerLoadingProgress(LP.LOADING)
  },
  onLoadNewsCompleted({ news, itemConf }){
    if (news) {
      const r = Logic.loadNewsCompleted(this.news, news);
      this.trigger(TYPES.LOAD_NEWS_COMPLETED, r)
    }
    this.triggerLoadingProgress(LP.LOADING_COMPLETE)
  },
  onLoadNewsFailed(option){
    ComponentActions.showModalDialog('ALERT_DIALOG', option)
    //ComponentActions.showModalDialog('APIKEY_DIALOG', option)
    this.triggerLoadingProgress(LP.LOADING_FAILED)
  },


  onRemoveNews(item){
    Logic.removeNews(this.news, item)
  },
  onRemoveAllNews(paneId){
    const r = Logic.removeAllNews(this.news, paneId)
    this.trigger(TYPES.LOAD_NEWS_COMPLETED, r)
  },
  onRemoveUnderNews(item){
    const r = Logic.removeUnderNews(this.news, item)
    this.trigger(TYPES.LOAD_NEWS_COMPLETED, r)
  }

}

export default NewsSlice
