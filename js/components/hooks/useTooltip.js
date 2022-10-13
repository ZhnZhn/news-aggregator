"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _has = _interopRequireDefault(require("../has"));

var HAS_TOUCH = _has["default"].HAS_TOUCH;

var useTooltip = function useTooltip(ariaLabel, dataPos) {
  return HAS_TOUCH ? [] : [ariaLabel, dataPos];
};

var _default = useTooltip;
exports["default"] = _default;
//# sourceMappingURL=useTooltip.js.map