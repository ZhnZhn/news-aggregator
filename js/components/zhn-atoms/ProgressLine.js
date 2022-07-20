"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = "progress-line",
    DF_COLOR = '#2f7ed8',
    TM_PERIOD = 800,
    TRANSITION_WIDTH = 'width 350ms linear',
    TRANSITION_OPACITY = 'opacity 250ms linear';

var _crStyle = function _crStyle(backgroundColor, opacity, width, transition) {
  return {
    backgroundColor: backgroundColor,
    width: width,
    opacity: opacity,
    transition: transition
  };
};

var _getCurrent = function _getCurrent(ref) {
  return ref.current;
};

var ProgressLine = function ProgressLine(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? DF_COLOR : _ref$color,
      completed = _ref.completed;

  var rerender = (0, _useRerender["default"])()[1],
      _refWasCompleted = (0, _uiApi.useRef)(false),
      _refIdCompleted = (0, _uiApi.useRef)(null),
      _refWasOpacied = (0, _uiApi.useRef)(false),
      _refIdOpacied = (0, _uiApi.useRef)(null);

  (0, _uiApi.useEffect)(function () {
    if (_getCurrent(_refWasCompleted)) {
      _refIdCompleted.current = setTimeout(rerender, TM_PERIOD);
    } else if (_getCurrent(_refWasOpacied)) {
      _refIdOpacied.current = setTimeout(rerender, TM_PERIOD);
    }
  });
  (0, _uiApi.useEffect)(function () {
    return function () {
      clearTimeout(_getCurrent(_refIdCompleted));
      clearTimeout(_getCurrent(_refIdOpacied));
    };
  }, []);

  var _style;

  if (_getCurrent(_refWasOpacied)) {
    _style = _crStyle(color, 1, 0);
    _refWasOpacied.current = false;
  } else if (_getCurrent(_refWasCompleted)) {
    _style = _crStyle(color, 0, '100%', TRANSITION_OPACITY);
    _refWasCompleted.current = false;
    _refWasOpacied.current = true;
  } else {
    if (completed < 0) {
      completed = 0;
    } else if (completed >= 100) {
      completed = 100;
      _refWasCompleted.current = true;
    }

    _style = _crStyle(color, 1, completed + '%', TRANSITION_WIDTH);
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: CL,
    style: _style
  });
};

var _default = ProgressLine;
exports["default"] = _default;
//# sourceMappingURL=ProgressLine.js.map