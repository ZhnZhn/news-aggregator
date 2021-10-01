"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_TAB = "tab",
    CL_ACTIVE = "active",
    CL_TAB_TITLE = "tab_t";

var Tab = function Tab(_ref) {
  var isSelected = _ref.isSelected,
      id = _ref.id,
      title = _ref.title,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: (0, _crCn["default"])(CL_TAB, [isSelected, CL_ACTIVE]),
    id: "tab-" + id,
    role: "tab",
    "aria-selected": isSelected,
    "aria-controls": "tabpanel-" + id,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL_TAB_TITLE,
      children: title
    })
  });
};

var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=Tab.js.map