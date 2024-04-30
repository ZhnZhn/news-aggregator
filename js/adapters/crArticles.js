"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
const _isArr = Array.isArray;
const crArticles = (items, crArticle) => _isArr(items) ? items.map(item => (0, _sanitizeArticle.default)(crArticle(item, Date.now()))) : [];
var _default = exports.default = crArticles;
//# sourceMappingURL=crArticles.js.map