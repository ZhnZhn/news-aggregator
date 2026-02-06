"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BROWSER_PANE = (0, _crStyle.crPaneCn)("browser-pane");
const Browser = props => {
  const [_cn, _style] = (0, _crStyle.crShowHide)(props.isShow, CL_BROWSER_PANE);

  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (0, _jsxRuntime.jsx)("div", {
    className: _cn,
    style: {
      ...props.style,
      ..._style
    },
    onKeyDown: props.onKeyDown,
    children: props.children
  });
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
};
var _default = exports.default = Browser;
//# sourceMappingURL=Browser.js.map