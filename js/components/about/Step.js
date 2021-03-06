"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  STEP: {
    color: '#80c040',
    display: 'inline-block',
    width: 26,
    height: 26,
    lineHeight: '24px',
    textAlign: 'center',
    textTransform: 'uppercase',
    border: '2px solid #80c040',
    borderRadius: '50%',
    fontSize: '1.125rem'
  },
  DESCR: {
    color: 'black'
  }
};

var Step = function Step(_ref) {
  var styleRoot = _ref.styleRoot,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? '0' : _ref$step,
      description = _ref.description;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
    style: styleRoot,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S.STEP,
      children: step
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      style: S.DESCR,
      children: ["\xA0", description]
    })]
  });
};

var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=Step.js.map