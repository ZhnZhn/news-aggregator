"use strict";

exports.__esModule = true;
exports.decodeHTMLEntities = void 0;
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
const decodeHTMLEntities = str => ((0, _isTypeFn.isStr)(str) && str || '').replace(_reHtmlCode, (_, code) => String.fromCharCode(code)).replace(_reHtmlEntities, _onMatch).replace(_reHtmlFilter, '');
exports.decodeHTMLEntities = decodeHTMLEntities;
//# sourceMappingURL=decodeHTMLEntities.js.map