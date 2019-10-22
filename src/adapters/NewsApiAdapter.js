import crId from '../utils/crId'

const _toFirstUpper = (str) => typeof str !== 'string'
  ? ''
  : str.charAt(0).toUpperCase() + str.slice(1);

const NewsApiAdapter = {
  toArticles: (articles=[], source) => {
    return articles.map(article => {
      article.articleId = crId()
      article.source = source
      return article;
    })
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
