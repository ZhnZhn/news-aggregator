

import { TYPES } from '../actions/NewsActions'
import ComponentActions from '../actions/ComponentActions'
import {TYPES as LP} from '../actions/LoadingProgressActions'

const Logic = {
  loadNewsCompleted(slice, news){
    const { source, articles=[], sortBy } = news;
    slice[source] = (slice[source])
            ? articles.concat(slice[source])
            : articles
    return {
      id: source,
      data: slice[source],
      sortBy: sortBy
    };
  },

  removeNews(slice, item){
    const { id, source } = item;
    slice[source] = slice[source].filter(article => {
      return article.articleId !== id;
    })
  }
}

const NewsSlice = {
  news: {},

  onLoadNews(option={}){
    ComponentActions.showNewsPane(option.itemConf)
    this.triggerLoadingProgress(LP.LOADING)
  },
  onLoadNewsCompleted({ news, itemConf }){
    const r = Logic.loadNewsCompleted(this.news, news);
    this.trigger(TYPES.LOAD_NEWS_COMPLETED, r)
    this.triggerLoadingProgress(LP.LOADING_COMPLETE)
  },
  onLoadNewsFailed(option){
    ComponentActions.showModalDialog('ALERT_DIALOG', option)
    this.triggerLoadingProgress(LP.LOADING_FAILED)
  },

  onRemoveNews(item){
    Logic.removeNews(this.news, item)
  }

}

export default NewsSlice
