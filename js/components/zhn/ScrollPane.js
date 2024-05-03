"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _usePassiveTouchEvent = _interopRequireDefault(require("../hooks/usePassiveTouchEvent"));
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const ScrollPane = _ref => {
  let {
    style,
    className,
    onScroll,
    children
  } = _ref;
  const _refDiv = (0, _uiApi.useRef)();
  (0, _usePassiveTouchEvent.default)(_refDiv, "scroll", onScroll);
  return (0, _jsxRuntime.jsx)("div", {
    ref: _refDiv,
    className: (0, _crStyle.crWithScrollCn)(className),
    style: style,
    children: children
  });
};
var _default = exports.default = ScrollPane;
//# sourceMappingURL=ScrollPane.js.map