"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fn = _interopRequireDefault(require("../../utils/fn"));
var _isTypeFn = require("../../utils/isTypeFn");
const _fnCatch = _ref => {
  let {
    error,
    onFailed
  } = _ref;
  onFailed(error);
};
const _fFetch = adapter => _ref2 => {
  let {
    json,
    option,
    onCompleted
  } = _ref2;
  const news = adapter.toNews(json, option),
    itemConf = option.itemConf;
  onCompleted({
    news,
    itemConf
  });
};
const loadNews = (option, onCompleted, onFailed) => {
  const {
    api,
    adapter
  } = option;
  (0, _fn.default)({
    uri: api.getRequestUrl(option),
    optionFetch: (0, _isTypeFn.isFn)(api.crOptionFetch) ? api.crOptionFetch(option) : void 0,
    option: option,
    onCheckResponse: api.checkResponse,
    onFetch: _fFetch(adapter),
    onCompleted: onCompleted,
    onCatch: _fnCatch,
    onFailed: onFailed
  });
};
var _default = exports.default = loadNews;
//# sourceMappingURL=loadNews.js.map