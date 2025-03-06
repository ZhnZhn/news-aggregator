"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _itemStore = require("../flux/itemStore");
var _PlgApi = require("../api/PlgApi");
var _utils = require("../utils");
var _joinBy = require("../utils/joinBy");
var _dt = require("../utils/dt");
var _strFn = require("../utils/strFn");
var _adapterFn = require("./adapterFn");
var _crArticles = _interopRequireDefault(require("./crArticles"));
const SOURCE_ID = "plg";
const _isArr = Array.isArray,
  _getProperty = (item, propName) => (item || {})[propName] || "";
const _crInsightList = insights => _isArr(insights) ? insights.reduce((list, item) => `${list}
  ${_getProperty(item, "ticker")} ${_getProperty(item, "sentiment")}
  ${_getProperty(item, "sentiment_reasoning")}
`, "") : "";
const _crArticle = (_ref, nowMls) => {
  let {
    title,
    description,
    insights,
    author,
    published_utc,
    publisher,
    article_url
  } = _ref;
  const {
    name
  } = publisher || {};
  return {
    source: SOURCE_ID,
    articleId: (0, _utils.crId)(),
    title,
    description: `${description}
      ${_crInsightList(insights)}`,
    author: (0, _joinBy.joinByBlank)(name, (0, _strFn.replaceAllBlankByNbsp)(author)),
    timeAgo: (0, _utils.safeFormatMls)((0, _dt.dateTimeToMls)(published_utc), nowMls),
    publishedAt: published_utc,
    url: article_url
  };
};
const _crPage = (_ref2, option) => {
  let {
    next_url
  } = _ref2;
  if (!(0, _PlgApi.isNextUrl)(next_url)) {
    return;
  }
  (0, _adapterFn.updateNextPage)(option);
  option.next_url = next_url;
  return {
    nextPage: option._nextPage,
    onPageLoad: () => (0, _itemStore.loadItem)(option)
  };
};
const PlgAdapter = {
  toNews(json, option) {
    const {
      results
    } = json;
    return {
      source: SOURCE_ID,
      articles: (0, _crArticles.default)(results, _crArticle),
      page: _crPage(json, option)
    };
  }
};
var _default = exports.default = PlgAdapter;
//# sourceMappingURL=PlgAdapter.js.map