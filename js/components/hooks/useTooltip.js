"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _has = require("../has");
var useTooltip = function useTooltip(ariaLabel, dataPos) {
  return _has.HAS_TOUCH_EVENTS ? [] : [ariaLabel, dataPos];
};
var _default = useTooltip;
exports["default"] = _default;
//# sourceMappingURL=useTooltip.js.map