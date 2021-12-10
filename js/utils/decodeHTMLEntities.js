"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _hm = {
  '&nbsp;': ' ',
  '&gt;': '>',
  '&lt;': '<',
  '&quot;': '"',
  '&apos;': "'",
  '&amp;': '&'
},
    _onMatch = function _onMatch(match) {
  return _hm[match];
},
    decodeHTMLEntities = function decodeHTMLEntities(str) {
  return (typeof str === 'string' && str || '').replace(/&#(\d+);?/g, function (_, code) {
    return String.fromCharCode(code);
  }).replace(/&quot;|&amp;|&apos;|&gt;|&lt;|&nbsp;/g, _onMatch);
};

var _default = decodeHTMLEntities;
exports["default"] = _default;
//# sourceMappingURL=decodeHTMLEntities.js.map