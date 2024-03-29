"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _SvgMore = _interopRequireDefault(require("./SvgMore"));
var _SvgX = _interopRequireDefault(require("./SvgX"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BROWSER_CAPTION = "br-caption gap-right",
  S_CAPTION = {
    fontSize: '1.125rem',
    fontWeight: 'bold'
  },
  S_BT_MORE = {
    position: 'absolute',
    top: '0.3rem',
    left: 0
  },
  S_SVG_MORE = {
    fill: 'inherit',
    stroke: 'inherit'
  },
  S_SVG_CLOSE = {
    position: 'absolute',
    top: 6,
    right: 0,
    width: '1.5rem',
    height: '1.5rem'
  };
const BrowserCaption = _ref => {
  let {
    style,
    caption,
    children,
    onMore,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    className: CL_BROWSER_CAPTION,
    style: style,
    children: [(0, _uiApi.isFn)(onMore) && (0, _jsxRuntime.jsx)(_SvgMore.default, {
      style: S_BT_MORE,
      svgStyle: S_SVG_MORE,
      onClick: onMore
    }), (0, _jsxRuntime.jsx)("span", {
      className: _crStyle.CL_SELECT_NONE,
      style: S_CAPTION,
      children: caption
    }), children, (0, _jsxRuntime.jsx)(_SvgX.default, {
      style: S_SVG_CLOSE,
      onClick: onClose
    })]
  });
};
var _default = BrowserCaption;
exports.default = _default;
//# sourceMappingURL=BrowserCaption.js.map