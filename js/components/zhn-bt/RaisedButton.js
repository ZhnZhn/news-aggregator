"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
var CL_BT_RAISED = 'bt-raised',
  CL_BT_RAISED_SPAN = 'bt-raised__span',
  S_PRIMARY_SPAN = {
    color: '#80c040'
  };
var RaisedButton = function RaisedButton(_ref) {
  var isPrimary = _ref.isPrimary,
    style = _ref.style,
    clDiv = _ref.clDiv,
    caption = _ref.caption,
    onClick = _ref.onClick;
  var _spanStyle = isPrimary ? S_PRIMARY_SPAN : void 0;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: CL_BT_RAISED,
    style: style,
    onClick: onClick,
    children: (0, _jsxRuntime.jsx)("div", {
      className: clDiv,
      children: (0, _jsxRuntime.jsx)("span", {
        className: CL_BT_RAISED_SPAN,
        style: _spanStyle,
        children: caption
      })
    })
  });
};
var _default = RaisedButton;
exports["default"] = _default;
//# sourceMappingURL=RaisedButton.js.map