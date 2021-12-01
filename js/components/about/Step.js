"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var S_P = {
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
},
    S_DESCR = {
  color: 'black'
};

var Step = function Step(_ref) {
  var step = _ref.step,
      description = _ref.description;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
    style: S_P,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_STEP,
      children: step
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      style: S_DESCR,
      children: ["\xA0", description]
    })]
  });
};

var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=Step.js.map