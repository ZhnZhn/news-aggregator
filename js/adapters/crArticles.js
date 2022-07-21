"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));

var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));

var _isArr = Array.isArray;

var crArticles = function crArticles(items, crArticle) {
  var _timeAgoOptions = _formatTimeAgo["default"].crOptions();

  return _isArr(items) ? items.map(function (item) {
    return (0, _sanitizeArticle["default"])(crArticle(item, _timeAgoOptions));
  }) : [];
};

var _default = crArticles;
exports["default"] = _default;
//# sourceMappingURL=crArticles.js.map