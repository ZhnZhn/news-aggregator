"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crId = require("../../utils/crId");
var _useRefInit = _interopRequireDefault(require("./useRefInit"));
const useId = id => (0, _useRefInit.default)(() => id || (0, _crId.crId)());
var _default = exports.default = useId;
//# sourceMappingURL=useId.js.map