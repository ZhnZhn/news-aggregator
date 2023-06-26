"use strict";

exports.__esModule = true;
exports.default = void 0;
const _isArr = Array.isArray;
const joinStrsBy = function (arr, delimeter) {
  if (arr === void 0) {
    arr = [];
  }
  if (delimeter === void 0) {
    delimeter = ', ';
  }
  return _isArr(arr) ? arr.filter(Boolean).join(delimeter) : '';
};
var _default = joinStrsBy;
exports.default = _default;
//# sourceMappingURL=joinStrsBy.js.map