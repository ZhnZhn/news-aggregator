"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));
var _jsxRuntime = require("preact/jsx-runtime");
var CL = "progress-line",
  DF_COLOR = '#2f7ed8',
  TM_PERIOD = 800,
  WIDTH_TRANSITION = 'width 350ms linear';
var _crLineStyle = function _crLineStyle(backgroundColor, width, transition) {
  return {
    backgroundColor: backgroundColor,
    width: width + '%',
    transition: transition,
    opacity: 1
  };
};
var _crCompleted = function _crCompleted(completed, _refWasCompleted) {
  return completed < 0 ? 0 : completed >= 100 ? ((0, _uiApi.setRefValue)(_refWasCompleted, true), 100) : completed;
};
var _crStyle = function _crStyle(_refWasCompleted, color, completed) {
  return (0, _uiApi.getRefValue)(_refWasCompleted) ? ((0, _uiApi.setRefValue)(_refWasCompleted, false), _crLineStyle(color, 0)) : _crLineStyle(color, _crCompleted(completed, _refWasCompleted), WIDTH_TRANSITION);
};
var ProgressLine = function ProgressLine(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? DF_COLOR : _ref$color,
    completed = _ref.completed;
  var rerender = (0, _useRerender["default"])()[1],
    _refWasCompleted = (0, _uiApi.useRef)(false),
    _refIdCompleted = (0, _uiApi.useRef)(null);
  (0, _uiApi.useEffect)(function () {
    if ((0, _uiApi.getRefValue)(_refWasCompleted)) {
      (0, _uiApi.setRefValue)(_refIdCompleted, setTimeout(rerender, TM_PERIOD));
    }
  });
  (0, _uiApi.useEffect)(function () {
    return function () {
      clearTimeout((0, _uiApi.getRefValue)(_refIdCompleted));
    };
  }, []);
  var _style = _crStyle(_refWasCompleted, color, completed);
  return (0, _jsxRuntime.jsx)("div", {
    className: CL,
    style: _style
  });
};
var _default = ProgressLine;
exports["default"] = _default;
//# sourceMappingURL=ProgressLine.js.map