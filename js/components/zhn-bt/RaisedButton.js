"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _BtCaption = _interopRequireDefault(require("./BtCaption"));
var _jsxRuntime = require("preact/jsx-runtime");
var CL_BT_RAISED = 'bt-raised',
  CL_BT_RAISED_SPAN = 'bt-raised__span',
  S_PRIMARY_COLOR = {
    color: '#80c040'
  };
var RaisedButton = function RaisedButton(_ref) {
  var isPrimary = _ref.isPrimary,
    style = _ref.style,
    clDiv = _ref.clDiv,
    caption = _ref.caption,
    hotKey = _ref.hotKey,
    onClick = _ref.onClick;
  var _spanStyle = isPrimary ? S_PRIMARY_COLOR : void 0;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: CL_BT_RAISED,
    style: style,
    onClick: onClick,
    children: (0, _jsxRuntime.jsx)("div", {
      className: clDiv,
      children: (0, _jsxRuntime.jsx)(_BtCaption["default"], {
        className: CL_BT_RAISED_SPAN,
        style: _spanStyle,
        caption: caption,
        hotKey: hotKey
      })
    })
  });
};
var _default = RaisedButton;
exports["default"] = _default;
//# sourceMappingURL=RaisedButton.js.map