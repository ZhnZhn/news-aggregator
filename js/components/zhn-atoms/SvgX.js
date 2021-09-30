"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var CL_SVG_CLOSE = "svg-close",
    DF_COLOR = '#d64336',
    S_SVG = {
  padding: 3
};

var SvgX = function SvgX(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? CL_SVG_CLOSE : _ref$className,
      style = _ref.style,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? DF_COLOR : _ref$color,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    tabIndex: "-1",
    className: className,
    style: style,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      viewBox: "0 0 12 12",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: S_SVG,
      strokeLinecap: "round",
      strokeWidth: "2",
      stroke: color,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 0,0 L 12,12"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 12,0 L 0,12"
      })]
    })
  });
};
/*
SvgX.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}
*/


var _default = SvgX;
exports["default"] = _default;
//# sourceMappingURL=SvgX.js.map