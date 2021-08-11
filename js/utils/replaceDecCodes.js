"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _hm = {
  '&#039;': "'",
  '&#038;': "&",
  '&#124;': '|',
  '&#160;': ' ',
  '&#8230;': '…',
  '&#8221;': '”',
  '&#8220;': '“',
  '&#8217;': "'",
  '&#8216;': "'",
  '&#8211;': '–',
  '&quot;': '"'
},
    _regDecCodes = /&#8217;|&#8216;|&#039;|&#038;|&#124;|&#8230;|&#8211;|&#8220;|&#8221;|&quot;|&#160;/g,
    _onMatch = function _onMatch(match) {
  return _hm[match];
},
    replaceDecCodes = function replaceDecCodes(str) {
  return (typeof str === 'string' && str || '').replace(_regDecCodes, _onMatch);
};

var _default = replaceDecCodes;
exports["default"] = _default;
//# sourceMappingURL=replaceDecCodes.js.map