"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_PANES = "panes",
  S_BLOCK = {
    display: 'block'
  },
  S_NONE = {
    display: 'none'
  };
const _crItemPane = (tab, index, _ref) => {
  let {
    isShow,
    selectedTabIndex
  } = _ref;
  const isSelected = index === selectedTabIndex;
  return (0, _jsxRuntime.jsx)("div", {
    style: isSelected ? S_BLOCK : S_NONE,
    role: "tabpanel",
    id: "tabpanel-" + index,
    "aria-labelledby": "tab-" + index,
    children: (0, _uiApi.cloneElement)(tab.props.children, {
      isShow,
      isSelected,
      isVisible: isShow && isSelected
    })
  }, index);
};
const PaneStack = _ref2 => {
  let {
    style,
    isShow,
    selectedTabIndex,
    children
  } = _ref2;
  return (0, _jsxRuntime.jsx)("div", {
    className: CL_PANES,
    children: (0, _jsxRuntime.jsx)(_ItemStack.default, {
      items: children,
      crItem: _crItemPane,
      isShow: isShow,
      selectedTabIndex: selectedTabIndex
    })
  });
};
var _default = PaneStack;
exports.default = _default;
//# sourceMappingURL=PaneStack.js.map