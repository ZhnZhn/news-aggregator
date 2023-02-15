"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _useTooltip = _interopRequireDefault(require("../hooks/useTooltip"));
var _useHotKey = _interopRequireDefault(require("../hotkeys/useHotKey"));
var useButton = function useButton(ariaLabel, dataPos, hotKey, onClick) {
  (0, _useHotKey["default"])(hotKey, onClick);
  return (0, _useTooltip["default"])(ariaLabel, dataPos, hotKey);
};
var _default = useButton;
exports["default"] = _default;
//# sourceMappingURL=useButton.js.map