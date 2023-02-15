"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _has = require("../has");
var _crAriaLabel = function _crAriaLabel(ariaLabel, hotKey) {
  return hotKey ? (ariaLabel || '') + " [" + hotKey.toLowerCase() + "]" : ariaLabel;
};
var useTooltip = function useTooltip(ariaLabel, dataPos, hotKey) {
  return _has.HAS_TOUCH_EVENTS ? [] : [_crAriaLabel(ariaLabel, hotKey), dataPos];
};
var _default = useTooltip;
exports["default"] = _default;
//# sourceMappingURL=useTooltip.js.map