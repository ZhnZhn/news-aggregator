"use strict";

exports.__esModule = true;
exports.default = void 0;
var _a11yFn = require("../a11yFn");
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT = `bt-circle ${_crStyle.CL_SELECT_NONE}`;
const CircleButton = props => {
  const [_ariaLabel, _dataPos] = (0, _a11yFn.crTooltip)(props.ariaLabel, props.dataPos);
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    className: (0, _crStyle.crCn)(CL_BT, props.className),
    style: props.style,
    onClick: props.onClick,
    children: props.caption || ''
  });
};
var _default = exports.default = CircleButton;
//# sourceMappingURL=CircleButton.js.map