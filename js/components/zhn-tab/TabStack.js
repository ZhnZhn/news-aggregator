"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_TABS = "tabs";

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _crItemTab = function _crItemTab(tabEl, index, _ref) {
  var selectedTabIndex = _ref.selectedTabIndex,
      hClick = _ref.hClick;
  return (0, _uiApi.cloneElement)(tabEl, {
    key: index,
    id: index,
    onClick: hClick.bind(null, index, tabEl),
    isSelected: index === selectedTabIndex
  });
};

var TabStack = function TabStack(_ref2) {
  var style = _ref2.style,
      selectedTabIndex = _ref2.selectedTabIndex,
      setTabIndex = _ref2.setTabIndex,
      children = _ref2.children;

  /*eslint-disable react-hooks/exhaustive-deps */
  var _hClick = (0, _uiApi.useCallback)(function (index, tabEl) {
    setTabIndex(index);

    if (_isFn(tabEl.props.onClick)) {
      tabEl.props.onClick();
    }
  }, []); //setTabIndex

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: CL_TABS,
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemStack["default"], {
      items: children,
      crItem: _crItemTab,
      selectedTabIndex: selectedTabIndex,
      hClick: _hClick
    })
  });
};

var _default = TabStack;
exports["default"] = _default;
//# sourceMappingURL=TabStack.js.map