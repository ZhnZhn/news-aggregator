'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hm = {
  '&#8217;': "'",
  '&#039;': "'",
  '&#8230;': '…',
  '&#8211;': '–',
  '&#8220;': '“',
  '&#160;': ' '
},
    _regDecCodes = /&#8217;|&#039;|&#8230;|&#8211;|&#8220;|&#160;/g,
    _onMatch = function _onMatch(match) {
  return _hm[match];
},
    replaceDecCodes = function replaceDecCodes(str) {
  return (typeof str === 'string' && str || '').replace(_regDecCodes, _onMatch);
};

exports.default = replaceDecCodes;
//# sourceMappingURL=replaceDecCodes.js.map