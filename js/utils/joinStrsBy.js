'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var joinStrsBy = function joinStrsBy() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var delimeter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';
  return arr.filter(Boolean).join(delimeter);
};

exports.default = joinStrsBy;
//# sourceMappingURL=joinStrsBy.js.map