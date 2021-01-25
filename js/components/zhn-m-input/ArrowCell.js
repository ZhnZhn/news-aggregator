"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  SVG: {
    display: 'inline-block',
    color: 'black',
    //color: 'rgb(255, 255, 255)',
    //fill: 'inherit',
    fill: 'black',
    height: '24px',
    width: '24px',
    userSelect: 'none',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  }
};

var ArrowCell = function ArrowCell() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    viewBox: "0 0 24 24",
    style: S.ROOT,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M7 10l5 5 5-5z"
    })
  });
};

var _default = ArrowCell;
exports["default"] = _default;
//# sourceMappingURL=ArrowCell.js.map