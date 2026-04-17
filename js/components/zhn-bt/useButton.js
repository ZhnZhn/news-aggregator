"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _a11yFn = require("../a11yFn");
var _useHotKey = _interopRequireDefault(require("../hotkeys/useHotKey"));
const useButton = (ariaLabel, dataPos, hotKey, onClick) => {
  (0, _useHotKey.default)(hotKey, onClick);
  return (0, _a11yFn.crTooltip)(ariaLabel, dataPos, hotKey);
};
var _default = exports.default = useButton;
//# sourceMappingURL=useButton.js.map