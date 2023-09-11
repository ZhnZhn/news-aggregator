"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const S_BROWSER = {
  flexShrink: 0,
  zIndex: 20,
  position: 'relative',
  height: 'calc(100vh - 71px)',
  minHeight: 500,
  minWidth: 270,
  maxWidth: 400,
  marginLeft: 10,
  padding: '0px 3px 35px 0px',
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  borderRadius: '4px'
};
const CL_BROWSER = (0, _crStyle.crContainerBgCn)("browser");
const Browser = _ref => {
  let {
    isShow,
    style,
    children
  } = _ref;
  const [_cn, _style] = (0, _crStyle.crShowHide)(isShow, CL_BROWSER);
  return (0, _jsxRuntime.jsx)("div", {
    className: _cn,
    style: {
      ...S_BROWSER,
      ...style,
      ..._style
    },
    children: children
  });
};
var _default = Browser;
exports.default = _default;
//# sourceMappingURL=Browser.js.map