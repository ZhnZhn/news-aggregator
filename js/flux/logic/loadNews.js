"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fn = _interopRequireDefault(require("../../utils/fn"));

var _isFn = function _isFn(fn) {
  return typeof fn === "function";
};

var _fnCatch = function _fnCatch(_ref) {
  var error = _ref.error,
      onFailed = _ref.onFailed;
  onFailed(error);
};

var _fFetch = function _fFetch(adapter) {
  return function (_ref2) {
    var json = _ref2.json,
        option = _ref2.option,
        onCompleted = _ref2.onCompleted;
    var news = adapter.toNews(json, option);
    var itemConf = option.itemConf;
    onCompleted({
      news: news,
      itemConf: itemConf
    });
  };
};

var loadNews = function loadNews(option, onCompleted, onFailed) {
  var api = option.api,
      adapter = option.adapter;
  (0, _fn["default"])({
    uri: api.getRequestUrl(option),
    optionFetch: _isFn(api.crOptionFetch) ? api.crOptionFetch(option) : void 0,
    option: option,
    onCheckResponse: api.checkResponse,
    onFetch: _fFetch(adapter),
    onCompleted: onCompleted,
    onCatch: _fnCatch,
    onFailed: onFailed
  });
};

var _default = loadNews;
exports["default"] = _default;
//# sourceMappingURL=loadNews.js.map