"use strict";

exports.__esModule = true;
exports.default = void 0;
const getFnByPropName = (obj, propName, dfValue) => obj && typeof obj[propName] == 'function' ? obj[propName] : () => dfValue;
var _default = getFnByPropName;
exports.default = _default;
//# sourceMappingURL=getFnByPropName.js.map