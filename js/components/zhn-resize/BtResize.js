"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useTooltip = _interopRequireDefault(require("../hooks/useTooltip"));
var _usePassiveTouchEvent = _interopRequireDefault(require("../hooks/usePassiveTouchEvent"));
var _Svg = _interopRequireDefault(require("../zhn/svg/Svg100"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_RESIZE = "bt-resize select-none";
const BtResize = _ref => {
  let {
    to,
    ariaLabel,
    dataPos,
    style,
    startResize,
    stopResize,
    onKeyDown,
    children
  } = _ref;
  const _refBt = (0, _uiApi.useRef)(),
    _x = to === 'r' ? '11' : '1',
    [_ariaLabel, _dataPos] = (0, _useTooltip.default)(ariaLabel, dataPos);
  (0, _usePassiveTouchEvent.default)(_refBt, _uiApi.EVENT_TOUCH_START, startResize);
  (0, _usePassiveTouchEvent.default)(_refBt, _uiApi.EVENT_TOUCH_END, stopResize);
  return (0, _jsxRuntime.jsx)("button", {
    ref: _refBt,
    type: "button",
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    className: CL_BT_RESIZE,
    style: style,
    onMouseDown: startResize,
    onMouseUp: stopResize,
    onKeyDown: onKeyDown,
    children: (0, _jsxRuntime.jsxs)(_Svg.default, {
      w: "12",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      fill: "none",
      children: [(0, _jsxRuntime.jsx)("path", {
        d: "M 1,6 L 11,6"
      }), (0, _jsxRuntime.jsx)("path", {
        d: "M 6,2 L " + _x + ",6 6,10"
      })]
    })
  });
};
var _default = exports.default = BtResize;
//# sourceMappingURL=BtResize.js.map