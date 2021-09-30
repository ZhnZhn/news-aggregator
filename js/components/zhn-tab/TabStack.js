"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));

var _jsxRuntime = require("react/jsx-runtime");

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _crItemTab = function _crItemTab(tabEl, index, _ref) {
  var selectedTabIndex = _ref.selectedTabIndex,
      selectedStyle = _ref.selectedStyle,
      hClick = _ref.hClick;
  return /*#__PURE__*/(0, _react.cloneElement)(tabEl, {
    key: index,
    id: index,
    onClick: hClick.bind(null, index, tabEl),
    isSelected: index === selectedTabIndex,
    selectedStyle: selectedStyle
  });
};

var TabStack = function TabStack(_ref2) {
  var style = _ref2.style,
      selectedStyle = _ref2.selectedStyle,
      selectedTabIndex = _ref2.selectedTabIndex,
      setTabIndex = _ref2.setTabIndex,
      children = _ref2.children;

  /*eslint-disable react-hooks/exhaustive-deps */
  var _hClick = (0, _react.useCallback)(function (index, tabEl) {
    setTabIndex(index);

    if (_isFn(tabEl.props.onClick)) {
      tabEl.props.onClick();
    }
  }, []); //setTabIndex

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemStack["default"], {
      items: children,
      crItem: _crItemTab,
      selectedTabIndex: selectedTabIndex,
      selectedStyle: selectedStyle,
      hClick: _hClick
    })
  });
};

var _default = TabStack;
exports["default"] = _default;
//# sourceMappingURL=TabStack.js.map