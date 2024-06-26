"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _BtCaption = _interopRequireDefault(require("./BtCaption"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_RAISED = "bt-raised",
  CL_BT_RAISED_DIV = CL_BT_RAISED + "__div",
  CL_BT_RAISED_SPAN = CL_BT_RAISED + "__span";
const RaisedButton = _ref => {
  let {
    refBt,
    isPrimary,
    style,
    caption,
    hotKey,
    onClick
  } = _ref;
  return (0, _jsxRuntime.jsx)("button", {
    ref: refBt,
    type: "button",
    className: CL_BT_RAISED,
    style: style,
    onClick: onClick,
    children: (0, _jsxRuntime.jsx)("div", {
      className: CL_BT_RAISED_DIV,
      children: (0, _jsxRuntime.jsx)(_BtCaption.default, {
        className: CL_BT_RAISED_SPAN,
        style: isPrimary ? _crStyle.S_COLOR_BLACK : void 0,
        caption: caption,
        hotKey: hotKey
      })
    })
  });
};
var _default = exports.default = RaisedButton;
//# sourceMappingURL=RaisedButton.js.map