"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_PANES = "panes",
    S_BLOCK = {
  display: 'block'
},
    S_NONE = {
  display: 'none'
};

var _crItemPane = function _crItemPane(tab, index, _ref) {
  var isShow = _ref.isShow,
      selectedTabIndex = _ref.selectedTabIndex;
  var isSelected = index === selectedTabIndex;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: isSelected ? S_BLOCK : S_NONE,
    role: "tabpanel",
    id: "tabpanel-" + index,
    "aria-labelledby": "tab-" + index,
    children: /*#__PURE__*/(0, _react.cloneElement)(tab.props.children, {
      isShow: isShow,
      isSelected: isSelected
    })
  }, index);
};

var PaneStack = function PaneStack(_ref2) {
  var style = _ref2.style,
      isShow = _ref2.isShow,
      selectedTabIndex = _ref2.selectedTabIndex,
      children = _ref2.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: CL_PANES,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemStack["default"], {
      items: children,
      crItem: _crItemPane,
      isShow: isShow,
      selectedTabIndex: selectedTabIndex
    })
  });
};

var _default = PaneStack;
exports["default"] = _default;
//# sourceMappingURL=PaneStack.js.map