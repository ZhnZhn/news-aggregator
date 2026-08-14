"use strict";

exports.__esModule = true;
exports.decodeHtmlEntities = void 0;
var _isTypeFn = require("./isTypeFn");
const _reHtmlCode = /'&#(\d+);?'/g,
  _reHtmlFilter = /'&#x200B;'/g;
const decodeHtmlEntities = str => ((0, _isTypeFn.isStr)(str) && str || '').replace(_reHtmlCode, (_, code) => String.fromCharCode(code)).replace(_reHtmlFilter, '');
exports.decodeHtmlEntities = decodeHtmlEntities;
//# sourceMappingURL=decodeHtmlEntities.js.map