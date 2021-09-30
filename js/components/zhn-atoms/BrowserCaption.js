"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _SvgMore = _interopRequireDefault(require("./SvgMore"));

var _SvgX = _interopRequireDefault(require("./SvgX"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_GAP = "gap-right",
    CL_NOT_SELECTED = "not-selected",
    S_ROOT = {
  position: 'relative',
  backgroundColor: '#3f5178',
  color: 'rgba(164, 135, 212, 1)',
  lineHeight: 1.8,
  padding: '4px 42px 2px 10px',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'clip'
},
    S_CAPTION = {
  fontSize: '1.125rem',
  fontWeight: 'bold'
},
    S_BT_MORE = {
  marginRight: 6
},
    S_SVG_MORE = {
  fill: 'inherit',
  stroke: 'inherit'
},
    S_SVG_CLOSE = {
  position: 'absolute',
  top: 6,
  right: 0,
  width: 24,
  height: 24
};

var _isFn = function _isFn(fn) {
  return typeof fn === "function";
};

var BrowserCaption = function BrowserCaption(_ref) {
  var style = _ref.style,
      caption = _ref.caption,
      children = _ref.children,
      onMore = _ref.onMore,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_GAP,
    style: (0, _extends2["default"])({}, S_ROOT, style),
    children: [_isFn(onMore) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore["default"], {
      style: S_BT_MORE,
      svgStyle: S_SVG_MORE,
      onClick: onMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL_NOT_SELECTED,
      style: S_CAPTION,
      children: caption
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgX["default"], {
      style: S_SVG_CLOSE,
      onClick: onClose
    })]
  });
};

var _default = BrowserCaption;
exports["default"] = _default;
//# sourceMappingURL=BrowserCaption.js.map