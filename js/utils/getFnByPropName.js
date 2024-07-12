"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("./isTypeFn");
const getFnByPropName = (obj, propName, dfValue) => obj && propName && (0, _isTypeFn.isFn)(obj[propName]) ? obj[propName] : () => dfValue;
var _default = exports.default = getFnByPropName;
//# sourceMappingURL=getFnByPropName.js.map