"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime.js");

var CL_BT = 'bt-circle not-selected';

var CircleButton = function CircleButton(_ref) {
  var _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      title = _ref.title,
      className = _ref.className,
      style = _ref.style,
      onClick = _ref.onClick;

  var _className = className ? CL_BT + " " + className : CL_BT;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: _className,
    style: style,
    title: title,
    onClick: onClick,
    children: caption
  });
};

var _default = CircleButton;
exports["default"] = _default;
//# sourceMappingURL=CircleButton.js.map