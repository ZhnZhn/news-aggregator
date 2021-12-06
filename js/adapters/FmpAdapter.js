"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crId = _interopRequireDefault(require("../utils/crId"));

var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));

var SOURCE_ID = 'fmp_news';
var _isArr = Array.isArray;

var _toDate = function _toDate(strDate) {
  var _arrDateTime = (strDate || '').split(' '),
      _arrDate = (_arrDateTime[0] || '').split('-'),
      _strDate = _arrDate.reverse().join('-');

  return (_arrDateTime[1] || '') + ' ' + _strDate;
};

var _toArticles = function _toArticles(json) {
  var _timeAgoOptions = _formatTimeAgo["default"].crOptions();

  return _isArr(json) ? json.map(function (item) {
    var title = item.title,
        text = item.text,
        symbol = item.symbol,
        site = item.site,
        publishedDate = item.publishedDate,
        url = item.url;
    return {
      source: SOURCE_ID,
      articleId: (0, _crId["default"])(),
      title: title,
      url: url,
      description: text,
      related: symbol,
      author: site,
      publishedDate: _toDate(publishedDate),
      timeAgo: (0, _formatTimeAgo["default"])(publishedDate, _timeAgoOptions)
    };
  }) : [];
};

var FmpAdapter = {
  toNews: function toNews(json, option) {
    var articles = _toArticles(json);

    return {
      source: SOURCE_ID,
      articles: articles //sortBy: `${symbol.toUpperCase()} ${recent}`

    };
  }
};
var _default = FmpAdapter;
exports["default"] = _default;
//# sourceMappingURL=FmpAdapter.js.map