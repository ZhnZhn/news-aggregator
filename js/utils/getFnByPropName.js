"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var getFnByPropName = function getFnByPropName(obj, propName, dfValue) {
  return obj && typeof obj[propName] == 'function' ? obj[propName] : function () {
    return dfValue;
  };
};
var _default = getFnByPropName;
exports["default"] = _default;
//# sourceMappingURL=getFnByPropName.js.map