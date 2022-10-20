"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crId = _interopRequireDefault(require("../utils/crId"));

var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));

var _crDescription = _interopRequireDefault(require("../utils/crDescription"));

var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));

var _isArr = Array.isArray;
var SOURCE_ID = 'iex_news',
    DF_SYMBOL = 'AAPL';

var _isStr = function _isStr(v) {
  return typeof v === 'string';
};

var _crAuthor = function _crAuthor(hasPaywall, source) {
  return hasPaywall ? "$ " + source : source;
};

var _crRelated = function _crRelated(related) {
  return _isStr(related) ? related.split(',').join(', ') : void 0;
};

var _crSource = function _crSource(source) {
  return _isStr(source) ? source.trim() : '';
};

var _toArticles = function _toArticles(json) {
  var _timeAgoOptions = _formatTimeAgo["default"].crOptions(),
      _hmByHeadline = {};

  return _isArr(json) ? json.reduce(function (arr, item, index) {
    var headline = item.headline,
        source = item.source,
        datetime = item.datetime,
        summary = item.summary,
        related = item.related,
        url = item.url,
        hasPaywall = item.hasPaywall,
        _source = _crSource(source),
        description = (0, _crDescription["default"])(summary),
        _article = {
      source: SOURCE_ID,
      articleId: (0, _crId["default"])(),
      title: headline,
      description: description,
      related: _crRelated(related),
      author: _crAuthor(hasPaywall, _source),
      publishedAt: datetime,
      timeAgo: (0, _formatTimeAgo["default"])(datetime, _timeAgoOptions),
      url: url
    },
        _hmArticle = _hmByHeadline[headline];

    if (_hmArticle) {
      var hmSource = _hmArticle[0],
          hmDescr = _hmArticle[1],
          hmDatetime = _hmArticle[2],
          hmIndex = _hmArticle[3];

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
  }, []).filter(function (item) {
    return !item._isNewer;
  }).map(_sanitizeArticle["default"]) : [];
};

var _crCaption = function _crCaption(_ref) {
  var _ref$symbol = _ref.symbol,
      symbol = _ref$symbol === void 0 ? DF_SYMBOL : _ref$symbol;
  return "IEX Cloud: " + symbol;
};

var IexAdapter = {
  toNews: function toNews(json, option) {
    return {
      source: SOURCE_ID,
      caption: _crCaption(option),
      articles: _toArticles(json)
    };
  }
};
var _default = IexAdapter;
exports["default"] = _default;
//# sourceMappingURL=IexAdapter.js.map