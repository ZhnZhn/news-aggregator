"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _TabStack = _interopRequireDefault(require("./TabStack"));
var _PaneStack = _interopRequireDefault(require("./PaneStack"));
var _jsxRuntime = require("preact/jsx-runtime");
const TabPane = (0, _uiApi.forwardRef)((_ref, ref) => {
  let {
    id,
    isShow,
    width,
    height,
    tabsStyle,
    children
  } = _ref;
  const [selectedTabIndex, setTabIndex] = (0, _uiApi.useState)(0);
  (0, _uiApi.useImperativeHandle)(ref, () => ({
    getSelectedTabIndex: () => selectedTabIndex
  }), [selectedTabIndex]);
  return (0, _jsxRuntime.jsxs)("div", {
    style: {
      width,
      height
    },
    children: [(0, _jsxRuntime.jsx)(_TabStack.default, {
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
exports.default = _default;
//# sourceMappingURL=TabPane.js.map