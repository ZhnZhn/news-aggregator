"use strict";

exports.__esModule = true;
exports.decodeHtmlEntitiesByHashMap = exports.decodeHtmlEntities = void 0;
var _isTypeFn = require("./isTypeFn");
const _hmHtmlEntities = Object.assign(Object.create(null), {
    '&nbsp;': ' ',
    '&gt;': '>',
    '&lt;': '<',
    '&quot;': '"',
    '&apos;': "'",
    '&amp;': '&'
  }),
  _reHtmlEntities = new RegExp(Object.keys(_hmHtmlEntities).join('|'), 'g'),
  _reHtmlCode = new RegExp('&#(\\d+);?', 'g'),
  _reHtmlFilter = new RegExp('&#x200B;', 'g'),
  _onMatch = match => _hmHtmlEntities[match];
const decodeHtmlEntitiesByHashMap = str => ((0, _isTypeFn.isStr)(str) && str || '').replace(_reHtmlEntities, _onMatch);
exports.decodeHtmlEntitiesByHashMap = decodeHtmlEntitiesByHashMap;
const decodeHtmlEntities = str => ((0, _isTypeFn.isStr)(str) && str || '').replace(_reHtmlCode, (_, code) => String.fromCharCode(code)).replace(_reHtmlFilter, '');
exports.decodeHtmlEntities = decodeHtmlEntities;
//# sourceMappingURL=decodeHTMLEntities.js.map