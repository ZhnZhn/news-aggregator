"use strict";

exports.__esModule = true;
exports.default = void 0;
const _isArr = Array.isArray;
const crArticles = (items, crArticle) => _isArr(items) ? items.map(item => crArticle(item, Date.now())) : [];
var _default = exports.default = crArticles;
//# sourceMappingURL=crArticles.js.map