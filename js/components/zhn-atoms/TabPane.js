"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _ItemStack = _interopRequireDefault(require("./ItemStack"));

var _jsxRuntime = require("react/jsx-runtime");

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

var _fCrItemTab = function _fCrItemTab(selectedTabIndex, selectedStyle, hClick) {
  return function (tabEl, index) {
    return /*#__PURE__*/(0, _react.cloneElement)(tabEl, {
      key: index,
      id: index,
      onClick: hClick.bind(null, index, tabEl),
      isSelected: index === selectedTabIndex,
      selectedStyle: selectedStyle
    });
  };
};

var TabStack = function TabStack(_ref) {
  var style = _ref.style,
      selectedStyle = _ref.selectedStyle,
      selectedTabIndex = _ref.selectedTabIndex,
      setTabIndex = _ref.setTabIndex,
      children = _ref.children;

  /*eslint-disable react-hooks/exhaustive-deps */
  var _hClick = (0, _react.useCallback)(function (index, tabEl) {
    setTabIndex(index);

    if (_isFn(tabEl.props.onClick)) {
      tabEl.props.onClick();
    }
  }, []) //setTabIndex
  ,
      _crItemTab = (0, _react.useMemo)(function () {
    return _fCrItemTab(selectedTabIndex, selectedStyle, _hClick);
  }, [selectedTabIndex]); //selectedStyle, _hClick

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemStack["default"], {
      items: children,
      crItem: _crItemTab
    })
  });
};

var _fCrItemPane = function _fCrItemPane(isShow, selectedTabIndex) {
  return function (tab, index) {
    var isSelected = index === selectedTabIndex;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: isSelected ? S.TAB_SELECTED : S.NONE,
      role: "tabpanel",
      id: "tabpanel-" + index,
      "aria-labelledby": "tab-" + index,
      children: /*#__PURE__*/(0, _react.cloneElement)(tab.props.children, {
        key: 'comp' + index,
        isShow: isShow,
        isSelected: isSelected
      })
    }, 'a' + index);
  };
};

var PaneStack = function PaneStack(_ref2) {
  var style = _ref2.style,
      isShow = _ref2.isShow,
      selectedTabIndex = _ref2.selectedTabIndex,
      children = _ref2.children;

  var _crItem = (0, _react.useMemo)(function () {
    return _fCrItemPane(isShow, selectedTabIndex);
  }, [isShow, selectedTabIndex]);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemStack["default"], {
      items: children,
      crItem: _crItem
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
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(TabStack, {
      style: (0, _extends2["default"])({}, S.TABS, tabsStyle),
      selectedStyle: selectedStyle,
      selectedTabIndex: selectedTabIndex,
      setTabIndex: setTabIndex,
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(PaneStack, {
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