"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Svg = _interopRequireDefault(require("../zhn-atoms/svg/Svg100"));

var _jsxRuntime = require("preact/jsx-runtime");

var CL_BT_RESIZE = "bt-resize select-none";

var BtResize = function BtResize(_ref) {
  var to = _ref.to,
      ariaLabel = _ref.ariaLabel,
      dataPos = _ref.dataPos,
      style = _ref.style,
      startResize = _ref.startResize,
      stopResize = _ref.stopResize,
      onKeyDown = _ref.onKeyDown,
      children = _ref.children;

  var _x = to === 'r' ? '11' : '1';

  return (0, _jsxRuntime.jsx)("button", {
    "aria-label": ariaLabel,
    "data-pos": dataPos,
    className: CL_BT_RESIZE,
    style: style,
    onMouseDown: startResize,
    onMouseUp: stopResize,
    onKeyDown: onKeyDown,
    onTouchStart: startResize,
    onTouchEnd: stopResize,
    children: (0, _jsxRuntime.jsxs)(_Svg["default"], {
      w: "12",
      strokeWidth: "2",
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

var _default = BtResize;
exports["default"] = _default;
//# sourceMappingURL=BtResize.js.map