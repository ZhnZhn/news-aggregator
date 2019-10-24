'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var toFirstUpperCase = function toFirstUpperCase(str) {
  return typeof str !== 'string' ? '' : str.charAt(0).toUpperCase() + str.slice(1);
};

exports.default = toFirstUpperCase;
//# sourceMappingURL=toFirstUpperCase.js.map