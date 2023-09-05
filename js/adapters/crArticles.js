"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
const _isArr = Array.isArray;
const crArticles = (items, crArticle) => {
  const _timeAgoOptions = _utils.formatTimeAgo.crOptions();
  return _isArr(items) ? items.map(item => (0, _sanitizeArticle.default)(crArticle(item, _timeAgoOptions))) : [];
};
var _default = crArticles;
exports.default = _default;
//# sourceMappingURL=crArticles.js.map