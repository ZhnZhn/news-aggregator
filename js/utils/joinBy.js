"use strict";

exports.__esModule = true;
exports.joinByComma = exports.joinByBlank = void 0;
const _fJoinBy = delimeter => function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args.filter(Boolean).join(delimeter);
};
const joinByComma = exports.joinByComma = _fJoinBy(', ');
const joinByBlank = exports.joinByBlank = _fJoinBy(' ');
//# sourceMappingURL=joinBy.js.map