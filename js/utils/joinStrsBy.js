"use strict";

exports.__esModule = true;
exports.joinStrsBy = void 0;
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
exports.joinStrsBy = joinStrsBy;
//# sourceMappingURL=joinStrsBy.js.map