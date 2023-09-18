"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRefInit = _interopRequireDefault(require("./useRefInit"));
const useId = id => (0, _useRefInit.default)(() => id || (0, _uiApi.crId)());
var _default = useId;
exports.default = _default;
//# sourceMappingURL=useId.js.map