"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useTheme = _interopRequireDefault(require("../../hooks/useTheme"));

var _useKeyDown = _interopRequireDefault(require("./useKeyDown"));

var useDecorDialog = function useDecorDialog(styleConfig, hLoad, hClose) {
  var TS = (0, _useTheme["default"])(styleConfig);
  return [TS, (0, _useKeyDown["default"])(hLoad, hClose)];
};

var _default = useDecorDialog;
exports["default"] = _default;
//# sourceMappingURL=useDecorDialog.js.map