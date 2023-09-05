"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _crArticles = _interopRequireDefault(require("./crArticles"));
const SOURCE_ID = 'fmp_news';
const _toDate = strDate => {
  const _arrDateTime = (strDate || '').split(' '),
    _arrDate = (_arrDateTime[0] || '').split('-'),
    _strDate = _arrDate.reverse().join('-');
  return (_arrDateTime[1] || '') + ' ' + _strDate;
};
const _crArticle = (_ref, timeAgoOptions) => {
  let {
    title,
    text,
    symbol,
    site,
    publishedDate,
    url
  } = _ref;
  return {
    source: SOURCE_ID,
    articleId: (0, _utils.crId)(),
    title,
    description: text,
    related: symbol,
    author: site,
    publishedDate: _toDate(publishedDate),
    timeAgo: (0, _utils.formatTimeAgo)(publishedDate, timeAgoOptions),
    url
  };
};
const FmpAdapter = {
  toNews(json, option) {
    return {
      source: SOURCE_ID,
      articles: (0, _crArticles.default)(json, _crArticle)
      //sortBy: `${symbol.toUpperCase()} ${recent}`
    };
  }
};
var _default = FmpAdapter;
exports.default = _default;
//# sourceMappingURL=FmpAdapter.js.map