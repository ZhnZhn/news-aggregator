"use strict";

exports.__esModule = true;
exports.default = void 0;
var _storeAtoms = require("../../flux/storeAtoms");
var _jsxRuntime = require("preact/jsx-runtime");
const S_LIMIT_VALUE = {
  display: 'inline-block',
  color: 'var(--bt-fc,#6ca1dc)',
  padding: '5px 10px 0',
  fontSize: '1rem',
  fontWeight: 'bold'
};
const UsageLimitRemaining = () => {
  const value = (0, _storeAtoms.useLimitRemaining)();
  return (0, _jsxRuntime.jsx)("span", {
    style: S_LIMIT_VALUE,
    children: value
  });
};
var _default = exports.default = UsageLimitRemaining;
//# sourceMappingURL=UsageLimitRemaining.js.map