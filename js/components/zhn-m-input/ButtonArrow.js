"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));
var _Input = require("./Input.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const ButtonArrow = _ref => {
  let {
    refEl,
    style,
    onKeyDown,
    onClick
  } = _ref;
  return (0, _jsxRuntime.jsx)("button", {
    ref: refEl,
    type: "button",
    className: _Input.CL_SELECT_DIV_BT,
    style: style,
    onKeyDown: onKeyDown,
    onClick: onClick,
    children: (0, _jsxRuntime.jsx)(_ArrowCell.default, {})
  });
};
var _default = exports.default = ButtonArrow;
//# sourceMappingURL=ButtonArrow.js.map