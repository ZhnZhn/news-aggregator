"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _BtCaption = _interopRequireDefault(require("./BtCaption"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_RAISED = "bt-raised",
  CL_BT_RAISED_DIV = `${CL_BT_RAISED}__div`,
  CL_BT_RAISED_SPAN = `${CL_BT_RAISED}__span`;
const RaisedButton = props => (0, _jsxRuntime.jsx)("button", {
  ref: props.refBt,
  type: "button",
  className: CL_BT_RAISED,
  style: props.style,
  onClick: props.onClick,
  children: (0, _jsxRuntime.jsx)("div", {
    className: CL_BT_RAISED_DIV,
    children: (0, _jsxRuntime.jsx)(_BtCaption.default, {
      className: CL_BT_RAISED_SPAN,
      style: props.isPrimary ? _crStyle.S_COLOR_BLACK : void 0,
      caption: props.caption,
      hotKey: props.hotKey
    })
  })
});
var _default = exports.default = RaisedButton;
//# sourceMappingURL=RaisedButton.js.map