"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _crId = _interopRequireDefault(require("../utils/crId"));
var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));
var _crArticles = _interopRequireDefault(require("./crArticles"));
var SOURCE_ID = 'fmp_news';
var _toDate = function _toDate(strDate) {
  var _arrDateTime = (strDate || '').split(' '),
    _arrDate = (_arrDateTime[0] || '').split('-'),
    _strDate = _arrDate.reverse().join('-');
  return (_arrDateTime[1] || '') + ' ' + _strDate;
};
var _crArticle = function _crArticle(_ref, timeAgoOptions) {
  var title = _ref.title,
    text = _ref.text,
    symbol = _ref.symbol,
    site = _ref.site,
    publishedDate = _ref.publishedDate,
    url = _ref.url;
  return {
    source: SOURCE_ID,
    articleId: (0, _crId["default"])(),
    title: title,
    description: text,
    related: symbol,
    author: site,
    publishedDate: _toDate(publishedDate),
    timeAgo: (0, _formatTimeAgo["default"])(publishedDate, timeAgoOptions),
    url: url
  };
};
var FmpAdapter = {
  toNews: function toNews(json, option) {
    return {
      source: SOURCE_ID,
      articles: (0, _crArticles["default"])(json, _crArticle)
      //sortBy: `${symbol.toUpperCase()} ${recent}`
    };
  }
};
var _default = FmpAdapter;
exports["default"] = _default;
//# sourceMappingURL=FmpAdapter.js.map