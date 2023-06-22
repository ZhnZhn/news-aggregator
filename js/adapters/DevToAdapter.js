"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _crId = _interopRequireDefault(require("../utils/crId"));
var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));
var _dt = require("../utils/dt");
var _crDescription = _interopRequireDefault(require("../utils/crDescription"));
var _decodeHTMLEntities = _interopRequireDefault(require("../utils/decodeHTMLEntities"));
var _crArticles = _interopRequireDefault(require("./crArticles"));
var SOURCE_ID = 'dt_topby';
var _crArticle = function _crArticle(item, timeAgoOptions) {
  var title = item.title,
    user = item.user,
    canonical_url = item.canonical_url,
    tags = item.tags,
    positive_reactions_count = item.positive_reactions_count,
    reading_time_minutes = item.reading_time_minutes,
    published_at = item.published_at;
  return {
    source: SOURCE_ID,
    articleId: (0, _crId["default"])(),
    title: (0, _decodeHTMLEntities["default"])(title),
    description: (0, _crDescription["default"])(positive_reactions_count + " " + reading_time_minutes + "min"),
    author: (user || {}).name,
    related: tags,
    timeAgo: (0, _formatTimeAgo["default"])((0, _dt.dateTimeToMls)(published_at), timeAgoOptions),
    publishedAt: published_at,
    url: canonical_url
  };
};
var _toArticles = function _toArticles(json) {
  return (0, _crArticles["default"])(json, _crArticle);
};
var DevToAdapter = {
  toNews: function toNews(json, option) {
    return {
      source: SOURCE_ID,
      articles: _toArticles(json)
    };
  }
};
var _default = DevToAdapter;
exports["default"] = _default;
//# sourceMappingURL=DevToAdapter.js.map