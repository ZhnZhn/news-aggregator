import {
  crId,
  toFirstUpperCase
} from '../utils';
import {
  joinByComma
} from '../utils/joinBy';

import sanitizeArticle from './sanitizeArticle';

const NEWS_SEARCH = 'newsapi_search';
const NEWS_TOP = 'newsapi_top';

const _fToArticle = source => article => {
  article.articleId = crId()
  article.source = source
  return article;
};
const _fToSearchArticle = paneId => article => {
  article.articleId = crId()
  const { source, author } = article || {}
  , { name } = source || {};
  article.source = paneId
  article.author = joinByComma(name, author)
  return article;
};

const NewsApiAdapter = {
  toArticles: (articles=[], source) => {
    const _toArticle = source === NEWS_SEARCH || source === NEWS_TOP
      ? _fToSearchArticle(source)
      : _fToArticle(source);
    return articles
     .map(item => sanitizeArticle(
        _toArticle(item)
     ));
  },

  toNews: (json, option) => {
    const { source } = option
    , { articles, sortBy } = json;
    return {
      source,
      articles: NewsApiAdapter.toArticles(articles, source),
      sortBy: toFirstUpperCase(sortBy)
    };
  }
}

export default NewsApiAdapter
