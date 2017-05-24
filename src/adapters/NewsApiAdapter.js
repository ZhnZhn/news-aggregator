import shortid from 'shortid'

const _toFirstUpper = (str) => {
  if (typeof str !== 'string'){
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}


const NewsApiAdapter = {
  toArticles: (articles=[], source) => {
    return articles.map((article) => {
      article.articleId = shortid.generate()
      article.source = source
      return article;
    })
  },

  toNews: (json, option) => {
    const { source } = option
        , { articles=[], sortBy=''} = json

    const _sortBy = _toFirstUpper(sortBy)
        , _articles = NewsApiAdapter.toArticles(articles, source);
    return {
      source: source,
      articles: _articles,
      sortBy: _sortBy
    };
  }
}

export default NewsApiAdapter
