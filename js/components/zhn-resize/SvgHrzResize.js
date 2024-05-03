"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DP = require("../DP");
var _useResizeElement = _interopRequireDefault(require("./useResizeElement"));
var _BtResize = _interopRequireDefault(require("./BtResize"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROOT_DIV = {
    display: 'inline-block'
  },
  S_ML_10 = {
    marginLeft: 10
  };
const SvgHrzResize = props => {
  const [hStartResizeLeft, hStartResizeRight, hStopResize, hKdLeft, hKdRight] = (0, _useResizeElement.default)(props);
  return (0, _jsxRuntime.jsxs)("div", {
    style: {
      ...S_ROOT_DIV,
      ...props.style
    },
    children: [(0, _jsxRuntime.jsx)(_BtResize.default, {
      ariaLabel: "Resize to Left",
      dataPos: _DP.DP_MIDDLE_RIGHT,
      style: S_ML_10,
      startResize: hStartResizeLeft,
      stopResize: hStopResize,
      onKeyDown: hKdLeft
    }), (0, _jsxRuntime.jsx)(_BtResize.default, {
      to: "r",
      ariaLabel: "Resize to Right",
      dataPos: _DP.DP_MIDDLE_RIGHT,
      style: S_ML_10,
      startResize: hStartResizeRight,
      stopResize: hStopResize,
      onKeyDown: hKdRight
    })]
  });
};

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
var _default = exports.default = SvgHrzResize;
//# sourceMappingURL=SvgHrzResize.js.map