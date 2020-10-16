"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var S = {
  TABS: {
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
    marginLeft: 10,
    textAlign: 'center'
  },
  PANES: {
    width: "100%",
    height: "100%"
  },
  TAB_SELECTED: {
    display: 'block',
    width: "100%",
    height: "100%"
  },
  NONE: {
    display: 'none'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _Tabs = function _Tabs(_ref) {
  var style = _ref.style,
      selectedStyle = _ref.selectedStyle,
      selectedTabIndex = _ref.selectedTabIndex,
      setTabIndex = _ref.setTabIndex,
      children = _ref.children;

  var _hClick = function _hClick(index, tabEl) {
    setTabIndex(index);

    if (_isFn(tabEl.props.onClick)) {
      tabEl.props.onClick();
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: style,
    children: children.map(function (tabEl, index) {
      return /*#__PURE__*/(0, _react.cloneElement)(tabEl, {
        key: index,
        id: index,
        onClick: _hClick.bind(null, index, tabEl),
        isSelected: index === selectedTabIndex,
        selectedStyle: selectedStyle
      });
    })
  });
};

var _Panes = function _Panes(_ref2) {
  var style = _ref2.style,
      isShow = _ref2.isShow,
      selectedTabIndex = _ref2.selectedTabIndex,
      children = _ref2.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: style,
    children: children.map(function (tab, index) {
      var _isSelected = index === selectedTabIndex;

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: _isSelected ? S.TAB_SELECTED : S.NONE,
        role: "tabpanel",
        id: "tabpanel-" + index,
        "aria-labelledby": "tab-" + index,
        children: /*#__PURE__*/(0, _react.cloneElement)(tab.props.children, {
          key: 'comp' + index,
          isShow: isShow,
          isSelected: _isSelected
        })
      }, 'a' + index);
    })
  });
};

var TabPane = /*#__PURE__*/(0, _react.forwardRef)(function (_ref3, ref) {
  var isShow = _ref3.isShow,
      width = _ref3.width,
      height = _ref3.height,
      tabsStyle = _ref3.tabsStyle,
      selectedStyle = _ref3.selectedStyle,
      children = _ref3.children;

  var _useState = (0, _react.useState)(0),
      selectedTabIndex = _useState[0],
      setTabIndex = _useState[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      getSelectedTabIndex: function getSelectedTabIndex() {
        return selectedTabIndex;
      }
    };
  }, [selectedTabIndex]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      width: width,
      height: height
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs, {
      style: (0, _extends2["default"])({}, S.TABS, tabsStyle),
      selectedStyle: selectedStyle,
      selectedTabIndex: selectedTabIndex,
      setTabIndex: setTabIndex,
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panes, {
      style: S.PANES,
      isShow: isShow,
      selectedTabIndex: selectedTabIndex,
      children: children
    })]
  });
});
/*
TabPane.propTypes = {
  isShow: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  tabsStyle: PropTypes.object,
  selectedStyle: PropTypes.object
}
*/

var _default = TabPane;
exports["default"] = _default;
//# sourceMappingURL=TabPane.js.map