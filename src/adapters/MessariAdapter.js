import ut from '../utils/ut'

const { crId } = ut;

const C = {
  SOURCE: 'messari_news'
};

/* Match only links that are fully qualified with https */
//const fullLinkOnlyRegex = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/

const _crRelated = tags => (tags || [])
 .filter(Boolean)
 .map(item => `#${item}`)
 .join(' ');

const _toArticles = (json) => {
  if (!json || !Array.isArray(json.data)) {
    return [];
  }
  return json.data.map(item => {
    const {
      title,
      //content,
      tags,
      published_at, url,
      author
    } = item
    , { name } = author;
    return {
      source: C.SOURCE,
      articleId: crId(),
      title: title,
      //description: '',
      related: _crRelated(tags),
      author: name,
      publishedAt: published_at,
      url: url
    };
  })
}

const MessariAdapter = {
  toNews(json, option){
    const articles = _toArticles(json);
    return {
      source: C.SOURCE,
      articles: articles
    };
  }
}

export default MessariAdapter
