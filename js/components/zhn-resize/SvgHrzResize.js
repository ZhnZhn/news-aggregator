"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useResizeElement2 = _interopRequireDefault(require("./useResizeElement"));

var _BtResize = _interopRequireDefault(require("./BtResize"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ROOT_DIV = {
  display: 'inline-block'
},
    S_BT_LEFT = {
  marginLeft: 10
},
    S_BT_RIGHT = {
  marginLeft: 10,
  transform: 'rotate(180deg)'
};
var SvgHrzResize = (0, _uiApi.forwardRef)(function (props, ref) {
  var _useResizeElement = (0, _useResizeElement2["default"])(props, ref),
      hStartResizeLeft = _useResizeElement[0],
      hStartResizeRight = _useResizeElement[1],
      hStopResize = _useResizeElement[2],
      hKdLeft = _useResizeElement[3],
      hKdRight = _useResizeElement[4];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S_ROOT_DIV, props.style),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BtResize["default"], {
      style: S_BT_LEFT,
      title: "Resize container to left",
      startResize: hStartResizeLeft,
      stopResize: hStopResize,
      onKeyDown: hKdLeft
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_BtResize["default"], {
      style: S_BT_RIGHT,
      title: "Resize container to right",
      startResize: hStartResizeRight,
      stopResize: hStopResize,
      onKeyDown: hKdRight
    })]
  });
});
/*
SvgHrzResize.propTypes = {
  elementRef: PropTypes.ref,
  style: PropTypes.object,
  initWidth: PropTypes.number,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  step: PropTypes.number,
  onResizeAfter: PropTypes.func
}
*/

var _default = SvgHrzResize;
exports["default"] = _default;
//# sourceMappingURL=SvgHrzResize.js.map