"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../utils/isTypeFn");
var _ProviderNames = require("../conf/ProviderNames");
var _utils = require("../utils");
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
const SOURCE_ID = 'iex_news',
  DF_SYMBOL = 'AAPL';
const _crAuthor = (hasPaywall, source) => hasPaywall ? `$ ${source}` : source;
const _crRelated = related => (0, _isTypeFn.isStr)(related) ? related.split(',').join(', ') : void 0;
const _crSource = source => (0, _isTypeFn.isStr)(source) ? source.trim() : '';
const _toArticles = json => {
  const _nowMls = Date.now(),
    _hmByHeadline = {};
  return (0, _isTypeFn.isArr)(json) ? json.reduce((arr, item, index) => {
    const {
        headline,
        source,
        datetime,
        summary,
        related,
        url,
        hasPaywall
      } = item,
      _source = _crSource(source),
      description = (0, _utils.crDescription)(summary),
      _article = {
        source: SOURCE_ID,
        articleId: (0, _utils.crId)(),
        title: headline,
        description,
        related: _crRelated(related),
        author: _crAuthor(hasPaywall, _source),
        publishedAt: datetime,
        timeAgo: (0, _utils.safeFormatMls)(datetime, _nowMls),
        url
      },
      _hmArticle = _hmByHeadline[headline];
    if (_hmArticle) {
      const [hmSource, hmDescr, hmDatetime, hmIndex] = _hmArticle;
      if (hmSource === _source && hmDescr === description) {
        if (hmDatetime < datetime) {
          arr[hmIndex]._isNewer = true;
        } else {
          _article._isNewer = true;
        }
      }
    }
    _hmByHeadline[headline] = [_source, description, datetime, arr.push(_article) - 1];
    return arr;
  }, []).filter(item => !item._isNewer).map(_sanitizeArticle.default) : [];
};
const _crCaption = _ref => {
  let {
    symbol = DF_SYMBOL
  } = _ref;
  return `${_ProviderNames.IEX_CLOUD}: ${symbol}`;
};
const IexAdapter = {
  toNews: (json, option) => ({
    source: SOURCE_ID,
    caption: _crCaption(option),
    articles: _toArticles(json)
  })
};
var _default = exports.default = IexAdapter;
//# sourceMappingURL=IexAdapter.js.map