"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime.js");

var CL = "tab";
var S = {
  BT: {
    color: '#2f7ed8',
    borderBottom: '3px solid #2f7ed8'
  },
  TITLE: {
    color: '#2f7ed8'
  }
};

var Tab = function Tab(_ref) {
  var id = _ref.id,
      title = _ref.title,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;

  var _btStyle = isSelected ? S.BT : null,
      _titleStyle = isSelected ? S.TITLE : null;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: CL,
    style: _btStyle,
    id: "tab-" + id,
    role: "tab",
    "aria-selected": isSelected,
    "aria-controls": "tabpanel-" + id,
    tabIndex: "0",
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: _titleStyle,
      children: title
    })
  });
};

var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=Tab.js.map