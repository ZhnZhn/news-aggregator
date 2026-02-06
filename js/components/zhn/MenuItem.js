"use strict";

exports.__esModule = true;
exports.default = void 0;
var _fUseKey = require("../hooks/fUseKey");
var _jsxRuntime = require("preact/jsx-runtime");
const MenuItem = props => {
  const _hKeyDown = (0, _fUseKey.useKeyEnterOrSpace)(props.onClick);
  return (0, _jsxRuntime.jsx)("div", {
    ref: props.refEl,
    role: "menuitem",
    tabIndex: "0",
    className: props.className,
    style: props.style,
    onClick: props.onClick,
    onKeyDown: _hKeyDown,
    children: props.caption || props.children
  });
};
var _default = exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map