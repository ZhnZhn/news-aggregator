"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../../utils");
var _useRefInit = _interopRequireDefault(require("./useRefInit"));
const useId = id => (0, _useRefInit.default)(() => id || (0, _utils.crId)());
var _default = exports.default = useId;
//# sourceMappingURL=useId.js.map