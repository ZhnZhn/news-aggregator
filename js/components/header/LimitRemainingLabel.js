"use strict";

exports.__esModule = true;
exports.default = void 0;
var _storeAtoms = require("../../flux/storeAtoms");
var _jsxRuntime = require("preact/jsx-runtime");
const S_LIMIT_VALUE = {
  display: 'inline-block',
  color: '#2f7ed8',
  padding: '5px 10px 0',
  //fontSize: '16px',
  fontSize: '1rem',
  fontWeight: 'bold'
};
const LimitRemainingLabel = () => {
  const value = (0, _storeAtoms.useLimitRemaining)();
  console.log(value);
  return (0, _jsxRuntime.jsx)("span", {
    style: S_LIMIT_VALUE,
    children: value
  });
};
var _default = exports.default = LimitRemainingLabel;
//# sourceMappingURL=LimitRemainingLabel.js.map