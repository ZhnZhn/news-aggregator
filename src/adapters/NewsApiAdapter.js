import crId from '../utils/crId'

const NEWS_SEARCH = 'newsapi_search';

const _toFirstUpper = (str) => typeof str !== 'string'
  ? ''
  : str.charAt(0).toUpperCase() + str.slice(1);

const _fToArticle = source => article => {
  article.articleId = crId()
  article.source = source
  return article;
};
const _toSearchArticle = article => {
  article.articleId = crId()
  const { source } = article || {}
  , { name } = source || {}
  , _source = name ? name+', ' : '';
  article.source = NEWS_SEARCH
  article.author = `${_source}${article.author}`
  return article;
};

const NewsApiAdapter = {
  toArticles: (articles=[], source) => {
    const _toArticle = source === NEWS_SEARCH
      ? _toSearchArticle
      : _fToArticle(source);
    return articles.map(_toArticle);
  },

  toNews: (json, option) => {
    const { source } = option
    , { articles=[], sortBy=''} = json
    , _sortBy = _toFirstUpper(sortBy)
    , _articles = NewsApiAdapter.toArticles(articles, source);
    return {
      source: source,
      articles: _articles,
      sortBy: _sortBy
    };
  }
}

export default NewsApiAdapter
