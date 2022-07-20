"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _TabStack = _interopRequireDefault(require("./TabStack"));

var _PaneStack = _interopRequireDefault(require("./PaneStack"));

var _jsxRuntime = require("react/jsx-runtime");

var TabPane = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var isShow = _ref.isShow,
      width = _ref.width,
      height = _ref.height,
      tabsStyle = _ref.tabsStyle,
      children = _ref.children;

  var _useState = (0, _uiApi.useState)(0),
      selectedTabIndex = _useState[0],
      setTabIndex = _useState[1];

  (0, _uiApi.useImperativeHandle)(ref, function () {
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
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TabStack["default"], {
      style: tabsStyle,
      selectedTabIndex: selectedTabIndex,
      setTabIndex: setTabIndex,
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaneStack["default"], {
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