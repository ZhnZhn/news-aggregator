"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _jsxRuntime = require("preact/jsx-runtime");

var CL_BT = 'bt-circle not-selected';

var CircleButton = function CircleButton(_ref) {
  var ariaLabel = _ref.ariaLabel,
      dataPos = _ref.dataPos,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      className = _ref.className,
      style = _ref.style,
      onClick = _ref.onClick;
  return (0, _jsxRuntime.jsx)("button", {
    "aria-label": ariaLabel,
    "data-pos": dataPos,
    className: (0, _crCn["default"])(CL_BT, className),
    style: style,
    onClick: onClick,
    children: caption
  });
};

var _default = CircleButton;
exports["default"] = _default;
//# sourceMappingURL=CircleButton.js.map