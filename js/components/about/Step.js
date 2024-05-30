"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const S_MT_3 = {
    marginTop: 3
  },
  S_STEP = {
    display: 'inline-block',
    color: '#80c040',
    width: 26,
    height: 26,
    lineHeight: '24px',
    textAlign: 'center',
    textTransform: 'uppercase',
    border: '2px solid #80c040',
    borderRadius: '50%',
    fontSize: '1.125rem'
  };
const Step = _ref => {
  let {
    step,
    description
  } = _ref;
  return (0, _jsxRuntime.jsxs)("p", {
    style: S_MT_3,
    children: [(0, _jsxRuntime.jsx)("span", {
      style: S_STEP,
      children: step
    }), (0, _jsxRuntime.jsxs)("span", {
      style: _crStyle.S_COLOR_BLACK,
      children: ["\xA0", description]
    })]
  });
};
var _default = exports.default = Step;
//# sourceMappingURL=Step.js.map