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
  CL_BT_SVG_CLOSE = "bt-svg-x bt-svg-close",
  CL_BT_SVG_MENU = "bt-svg-more bt-svg-menu",
  S_CAPTION = {
    fontSize: '1.125rem',
    fontWeight: 'bold'
  };
const BrowserCaption = props => (0, _jsxRuntime.jsxs)("div", {
  className: CL_BROWSER_CAPTION,
  style: props.style,
  children: [(0, _uiApi.isFn)(props.onMore) && (0, _jsxRuntime.jsx)(_SvgMore.default, {
    className: CL_BT_SVG_MENU,
    onClick: props.onMore
  }), (0, _jsxRuntime.jsx)("span", {
    className: _crStyle.CL_SELECT_NONE,
    style: S_CAPTION,
    children: props.caption
  }), props.children, (0, _jsxRuntime.jsx)(_SvgX.default, {
    className: CL_BT_SVG_CLOSE,
    onClick: props.onClose
  })]
});
var _default = exports.default = BrowserCaption;
//# sourceMappingURL=BrowserCaption.js.map