"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crId = require("../utils/crId");
var _domSanitize = require("../utils/domSanitize");
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
const _rSourceId = {
  SO_TAGGED: 'stack_tagged',
  SO_SEARCH: 'stack_search'
};
const _assign = Object.assign;
const _crArticle = (item, sourceId) => {
  const {
    title,
    question_id,
    owner = {}
  } = item;
  return _assign(item, {
    articleId: question_id || (0, _crId.crId)(),
    source: sourceId,
    title: (0, _domSanitize.domSanitize)(title),
    owner: {
      display_name: (0, _domSanitize.domSanitize)(owner.display_name)
    }
  });
};
const _crArticles = (items, sourceId) => items.map(item => (0, _sanitizeArticle.default)(_crArticle(item, sourceId)));
const StackOverflowAdapter = {
  toNews: (json, option) => {
    const {
        items
      } = json,
      {
        type
      } = option,
      _sourceId = _rSourceId[type];
    return {
      source: _sourceId,
      articles: _crArticles(items, _sourceId),
      sortBy: option.tag
    };
  }
};
var _default = exports.default = StackOverflowAdapter;
//# sourceMappingURL=StackOverflowAdapter.js.map