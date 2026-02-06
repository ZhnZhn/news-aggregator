"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _usePassiveTouchEvent = _interopRequireDefault(require("../hooks/usePassiveTouchEvent"));
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const ScrollPane = props => {
  const _refDiv = (0, _uiApi.useRef)();
  (0, _usePassiveTouchEvent.default)(_refDiv, "scroll", props.onScroll);
  return (0, _jsxRuntime.jsx)("div", {
    ref: _refDiv,
    className: (0, _crStyle.crWithScrollCn)(props.className),
    style: props.style,
    children: props.children
  });
};
var _default = exports.default = ScrollPane;
//# sourceMappingURL=ScrollPane.js.map