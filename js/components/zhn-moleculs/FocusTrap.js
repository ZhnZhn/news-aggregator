"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
/*eslint-disable jsx-a11y/no-noninteractive-tabindex*/const TrapDiv = _ref => {
  let {
    style,
    onFocus
  } = _ref;
  return (0, _jsxRuntime.jsx)("div", {
    style: style,
    tabIndex: "0",
    "aria-hidden": "true",
    onFocus: onFocus
  });
};
/*eslint-enable jsx-a11y/no-noninteractive-tabindex*/

const FocusTrap = _ref2 => {
  let {
    refEl,
    refFirst,
    refLast,
    style,
    children
  } = _ref2;
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(TrapDiv, {
      style: style,
      onFocus: () => {
        (0, _uiApi.focusRefElement)(refLast, refEl);
      }
    }), children, (0, _jsxRuntime.jsx)(TrapDiv, {
      style: style,
      onFocus: () => {
        (0, _uiApi.focusRefElement)(refFirst, refEl);
      }
    })]
  });
};
var _default = FocusTrap;
exports.default = _default;
//# sourceMappingURL=FocusTrap.js.map