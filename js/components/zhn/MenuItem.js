"use strict";

exports.__esModule = true;
exports.default = void 0;
var _fUseKey = require("../hooks/fUseKey");
var _jsxRuntime = require("preact/jsx-runtime");
const MenuItem = _ref => {
  let {
    refEl,
    className,
    style,
    caption,
    children,
    onClick
  } = _ref;
  const _hKeyDown = (0, _fUseKey.useKeyEnterOrSpace)(onClick);
  return (0, _jsxRuntime.jsx)("div", {
    ref: refEl,
    role: "menuitem",
    tabIndex: "0",
    className: className,
    style: style,
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: caption || children
  });
};
var _default = exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map