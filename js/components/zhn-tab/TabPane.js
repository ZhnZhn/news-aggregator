"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _TabStack = _interopRequireDefault(require("./TabStack"));
var _PaneStack = _interopRequireDefault(require("./PaneStack"));
var _jsxRuntime = require("preact/jsx-runtime");
const TabPane = _ref => {
  let {
    ariaLabel,
    id,
    isShow,
    width,
    height,
    tabsStyle,
    children
  } = _ref;
  const [selectedTabIndex, setTabIndex] = (0, _uiApi.useState)(0);
  return (0, _jsxRuntime.jsxs)("div", {
    style: {
      width,
      height
    },
    children: [(0, _jsxRuntime.jsx)(_TabStack.default, {
      ariaLabel: ariaLabel,
      id: id,
      style: tabsStyle,
      selectedTabIndex: selectedTabIndex,
      setTabIndex: setTabIndex,
      children: children
    }), (0, _jsxRuntime.jsx)(_PaneStack.default, {
      id: id,
      isShow: isShow,
      selectedTabIndex: selectedTabIndex,
      children: children
    })]
  });
};

/*
TabPane.propTypes = {
  isShow: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  tabsStyle: PropTypes.object,
  selectedStyle: PropTypes.object
}
*/
var _default = exports.default = TabPane;
//# sourceMappingURL=TabPane.js.map