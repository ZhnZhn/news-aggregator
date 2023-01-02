"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _domSanitize = _interopRequireDefault(require("../utils/domSanitize"));
var _crId = _interopRequireDefault(require("../utils/crId"));
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
var _rSourceId = {
  SO_TAGGED: 'stack_tagged',
  SO_SEARCH: 'stack_search'
};
var _assign = Object.assign;
var _crArticle = function _crArticle(item, sourceId) {
  var title = item.title,
    question_id = item.question_id,
    _item$owner = item.owner,
    owner = _item$owner === void 0 ? {} : _item$owner;
  return _assign(item, {
    articleId: question_id || (0, _crId["default"])(),
    source: sourceId,
    title: (0, _domSanitize["default"])(title),
    owner: {
      display_name: (0, _domSanitize["default"])(owner.display_name)
    }
  });
};
var _crArticles = function _crArticles(items, sourceId) {
  return items.map(function (item) {
    return (0, _sanitizeArticle["default"])(_crArticle(item, sourceId));
  });
};
var StackOverflowAdapter = {
  toNews: function toNews(json, option) {
    var items = json.items,
      type = option.type,
      _sourceId = _rSourceId[type];
    return {
      source: _sourceId,
      articles: _crArticles(items, _sourceId),
      sortBy: option.tag
    };
  }
};
var _default = StackOverflowAdapter;
exports["default"] = _default;
//# sourceMappingURL=StackOverflowAdapter.js.map