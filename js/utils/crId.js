"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER,
  INITIAL_INDEX = Math.pow(10, 7);
var i = INITIAL_INDEX,
  idSuffix = '';
var crId = function crId() {
  if (++i === MAX_SAFE_INTEGER) {
    i = INITIAL_INDEX;
    idSuffix = '-' + Math.floor(Math.random() * 100);
  }
  var _str = i.toString(36);
  return "" + _str.at(-1) + _str.at(-2) + _str.at(-3) + _str.slice(0, -3) + idSuffix;
};
var _default = crId;
exports["default"] = _default;
//# sourceMappingURL=crId.js.map