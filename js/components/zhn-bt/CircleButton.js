"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useTooltip2 = _interopRequireDefault(require("../hooks/useTooltip"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _jsxRuntime = require("preact/jsx-runtime");

var CL_BT = 'bt-circle select-none';

var CircleButton = function CircleButton(_ref) {
  var ariaLabel = _ref.ariaLabel,
      dataPos = _ref.dataPos,
      caption = _ref.caption,
      className = _ref.className,
      style = _ref.style,
      onClick = _ref.onClick;

  var _useTooltip = (0, _useTooltip2["default"])(ariaLabel, dataPos),
      _ariaLabel = _useTooltip[0],
      _dataPos = _useTooltip[1];

  return (0, _jsxRuntime.jsx)("button", {
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    className: (0, _crCn["default"])(CL_BT, className),
    style: style,
    onClick: onClick,
    children: caption || ''
  });
};

var _default = CircleButton;
exports["default"] = _default;
//# sourceMappingURL=CircleButton.js.map