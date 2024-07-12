"use strict";

exports.__esModule = true;
exports.toMls = exports.joinByBlank = void 0;
var _isTypeFn = require("../utils/isTypeFn");
const toMls = sec => (0, _isTypeFn.isNumber)(sec) ? sec * 1000 : void 0;
exports.toMls = toMls;
const joinByBlank = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args.filter(Boolean).join(' ');
};
exports.joinByBlank = joinByBlank;
//# sourceMappingURL=adapterFn.js.map