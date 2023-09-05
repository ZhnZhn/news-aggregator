"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ProviderNames = require("../conf/ProviderNames");
var _utils = require("../utils");
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
const _isArr = Array.isArray;
const SOURCE_ID = 'iex_news',
  DF_SYMBOL = 'AAPL';
const _isStr = v => typeof v === 'string';
const _crAuthor = (hasPaywall, source) => hasPaywall ? "$ " + source : source;
const _crRelated = related => _isStr(related) ? related.split(',').join(', ') : void 0;
const _crSource = source => _isStr(source) ? source.trim() : '';
const _toArticles = json => {
  const _timeAgoOptions = _utils.formatTimeAgo.crOptions(),
    _hmByHeadline = {};
  return _isArr(json) ? json.reduce((arr, item, index) => {
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
        timeAgo: (0, _utils.formatTimeAgo)(datetime, _timeAgoOptions),
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
  return _ProviderNames.IEX_CLOUD + ": " + symbol;
};
const IexAdapter = {
  toNews: (json, option) => ({
    source: SOURCE_ID,
    caption: _crCaption(option),
    articles: _toArticles(json)
  })
};
var _default = IexAdapter;
exports.default = _default;
//# sourceMappingURL=IexAdapter.js.map