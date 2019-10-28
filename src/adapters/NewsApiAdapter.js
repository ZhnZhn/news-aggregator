import ut from '../utils/ut'

const {
  crId,
  joinStrsBy, toFirstUpperCase
} = ut;

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
  , { name } = source || {}
  article.source = paneId
  article.author = joinStrsBy([name, author])
  return article;
};

const NewsApiAdapter = {
  toArticles: (articles=[], source) => {
    const _toArticle = source === NEWS_SEARCH || source === NEWS_TOP
      ? _fToSearchArticle(source)
      : _fToArticle(source);
    return articles.map(_toArticle);
  },

  toNews: (json, option) => {
    const { source } = option
    , { articles, sortBy } = json
    , _sortBy = toFirstUpperCase(sortBy)
    , _articles = NewsApiAdapter.toArticles(articles, source);
    return {
      source: source,
      articles: _articles,
      sortBy: _sortBy
    };
  }
}

export default NewsApiAdapter
