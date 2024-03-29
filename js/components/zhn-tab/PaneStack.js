"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _ItemStack = _interopRequireDefault(require("../zhn/ItemStack"));
var _tabPaneFn = require("./tabPaneFn");
var _jsxRuntime = require("preact/jsx-runtime");
const _crItemPane = (tab, index, _ref) => {
  let {
    id,
    isShow,
    selectedTabIndex
  } = _ref;
  const isSelected = index === selectedTabIndex;
  return (0, _jsxRuntime.jsx)("div", {
    style: (0, _crStyle.crShowHideStyle)(isSelected),
    role: "tabpanel",
    id: (0, _tabPaneFn.crTabPanelId)(id, index),
    "aria-labelledby": (0, _tabPaneFn.crTabId)(id, index),
    children: (0, _uiApi.cloneElement)(tab.props.children, {
      isShow,
      isSelected,
      isVisible: isShow && isSelected
    })
  }, index);
};
const PaneStack = _ref2 => {
  let {
    id,
    style,
    isShow,
    selectedTabIndex,
    children
  } = _ref2;
  return (0, _jsxRuntime.jsx)("div", {
    className: _tabPaneFn.CL_PANES,
    children: (0, _jsxRuntime.jsx)(_ItemStack.default, {
      items: children,
      crItem: _crItemPane,
      id: id,
      isShow: isShow,
      selectedTabIndex: selectedTabIndex
    })
  });
};
var _default = exports.default = PaneStack;
//# sourceMappingURL=PaneStack.js.map