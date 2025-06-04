"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crId = require("../utils/crId");
var _formatDate = require("../utils/formatDate");
var _dt = require("../utils/dt");
var _adapterFn = require("./adapterFn");
var _crArticles = _interopRequireDefault(require("./crArticles"));
const SOURCE_ID = 'dt_topby';
const _crArticle = (item, nowMls) => {
  const {
    title,
    user,
    canonical_url,
    tags,
    positive_reactions_count,
    reading_time_minutes,
    published_at
  } = item;
  return {
    source: SOURCE_ID,
    articleId: (0, _crId.crId)(),
    title: (0, _adapterFn.crTitle)(title),
    description: (0, _adapterFn.crDescription)(`${positive_reactions_count} ${reading_time_minutes}min`),
    author: (user || {}).name,
    related: tags,
    timeAgo: (0, _formatDate.safeFormatMls)((0, _dt.dateTimeToMls)(published_at), nowMls),
    publishedAt: published_at,
    url: canonical_url
  };
};
const _toArticles = json => (0, _crArticles.default)(json, _crArticle);
const DevToAdapter = {
  toNews(json, option) {
    return {
      source: SOURCE_ID,
      articles: _toArticles(json)
    };
  }
};
var _default = exports.default = DevToAdapter;
//# sourceMappingURL=DevToAdapter.js.map