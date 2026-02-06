"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _useButton = _interopRequireDefault(require("./useButton"));
var _BtCaption = _interopRequireDefault(require("./BtCaption"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_FLAT = "bt-flat",
  CL_BT_FLAT_DIV = `${CL_BT_FLAT}__div`,
  CL_BT_FLAT_SPAN = `${CL_BT_FLAT}__span`;
const FlatButton = props => {
  const [_ariaLabel, _dataPos] = (0, _useButton.default)(props.ariaLabel, props.dataPos, props.hotKey, props.onClick);
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    className: (0, _crStyle.crCn)(CL_BT_FLAT, props.className),
    style: props.style,
    onClick: props.onClick,
    children: (0, _jsxRuntime.jsxs)("div", {
      className: CL_BT_FLAT_DIV,
      children: [props.caption ? (0, _jsxRuntime.jsx)(_BtCaption.default, {
        className: CL_BT_FLAT_SPAN,
        caption: props.caption,
        hotKey: props.hotKey
      }) : null, props.children]
    })
  });
};
var _default = exports.default = FlatButton;
//# sourceMappingURL=FlatButton.js.map