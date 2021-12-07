import formatTimeAgo from '../utils/formatTimeAgo';
import toFirstUpperCase from '../utils/toFirstUpperCase';
import splitByParagraph from '../utils/splitByParagraph';

const _assign = Object.assign
, _isArr = Array.isArray
, _crHm = () => Object.create(null);

const _hmSourceId = {
  W_WEBZ_QUERY: "webz",
  W_WEBZ_COUNTRY: "webz_country"
};

const _crDescription = (text, lang) =>
  text.indexOf('\n') === -1
    ? (!lang || lang === 'english')
        ? splitByParagraph(text) : text
    : text.replace(/\n/g, '\n\n');

const _crRelated = tokenArr =>
  (tokenArr || [])
    .filter(str => (str || '').indexOf('_') === -1)
    .map(toFirstUpperCase)
    .join("|")

const _toArticles = (posts, sourceId, lang) => {
  const articles = [],
  _hm = _crHm()
  , _timeAgoOptions = formatTimeAgo.crOptions();

  if (!_isArr(posts)) {
    return articles;
  }

  posts.forEach(post => {
    const {
      title='',
      uuid,
      text,
      published,
      author,
      thread
    } = post
    , {
      site_full,
      site,
      site_categories
    } = thread || {}
    , _title = title.trim();
    if (_title && !_hm[_title]) {
      articles.push(_assign(post, {
        source: sourceId,
        articleId: uuid,
        author: author || site_full || site,
        description: _crDescription(text, lang),
        related: _crRelated(site_categories),
        publishedAt: published,
        timeAgo: formatTimeAgo(published, _timeAgoOptions)
      }))
      _hm[_title] = true;
    }
  })

  return articles;
};

const WebzAdapter = {
  toNews: (json, option) => {
    const { posts, requestsLeft } = json || {}
    , { type, lang } = option || {}
    , _sourceId = _hmSourceId[type]
    , articles = _toArticles(posts, _sourceId, lang);
    return {
      source: _sourceId,
      articles,
      sortBy: requestsLeft
    };
  }
};

export default WebzAdapter
