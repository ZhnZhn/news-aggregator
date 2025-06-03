"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _dt = require("../utils/dt");
var _crArticles = _interopRequireDefault(require("./crArticles"));
const SOURCE_ID = 'fmp_news';
const _crArticle = (_ref, nowMls) => {
  let {
    title,
    text,
    symbol,
    site,
    publishedDate,
    url
  } = _ref;
  const publishedAt = (0, _dt.dateTimeToMls)(publishedDate);
  return {
    source: SOURCE_ID,
    articleId: (0, _utils.crId)(),
    title,
    description: text,
    related: symbol,
    author: site,
    publishedAt,
    timeAgo: (0, _utils.safeFormatMls)(publishedAt, nowMls),
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
var _default = exports.default = FmpAdapter;
//# sourceMappingURL=FmpAdapter.js.map