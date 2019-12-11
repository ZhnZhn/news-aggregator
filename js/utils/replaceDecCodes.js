"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _hm = {
  '&#8217;': "'",
  '&#039;': "'",
  '&#8230;': '…',
  '&#8211;': '–',
  '&#8220;': '“',
  '&#8221;': '”',
  '&quot;': '"',
  '&#160;': ' '
},
    _regDecCodes = /&#8217;|&#039;|&#8230;|&#8211;|&#8220;|&#8221;|&quot;|&#160;/g,
    _onMatch = function _onMatch(match) {
  return _hm[match];
},
    replaceDecCodes = function replaceDecCodes(str) {
  return (typeof str === 'string' && str || '').replace(_regDecCodes, _onMatch);
};

var _default = replaceDecCodes;
exports["default"] = _default;
//# sourceMappingURL=replaceDecCodes.js.map