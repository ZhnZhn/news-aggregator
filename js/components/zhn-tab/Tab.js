"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_TAB = "tab",
  CL_ACTIVE = "active",
  CL_TAB_TITLE = "tab_t";
const Tab = _ref => {
  let {
    isSelected,
    id,
    title,
    onClick,
    onKeyDown
  } = _ref;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: (0, _crCn.default)(CL_TAB, [isSelected, CL_ACTIVE]),
    id: "tab-" + id,
    role: "tab",
    tabIndex: isSelected ? '0' : '-1',
    "aria-selected": isSelected,
    "aria-controls": "tabpanel-" + id,
    onClick: onClick,
    onKeyDown: onKeyDown,
    children: (0, _jsxRuntime.jsx)("span", {
      className: CL_TAB_TITLE,
      children: title
    })
  });
};
var _default = Tab;
exports.default = _default;
//# sourceMappingURL=Tab.js.map