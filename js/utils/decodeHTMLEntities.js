"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _hmHtmlEntities = Object.assign(Object.create(null), {
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
  _onMatch = function _onMatch(match) {
    return _hmHtmlEntities[match];
  },
  decodeHTMLEntities = function decodeHTMLEntities(str) {
    return (typeof str === 'string' && str || '').replace(_reHtmlCode, function (_, code) {
      return String.fromCharCode(code);
    }).replace(_reHtmlEntities, _onMatch).replace(_reHtmlFilter, '');
  };
var _default = decodeHTMLEntities;
exports["default"] = _default;
//# sourceMappingURL=decodeHTMLEntities.js.map