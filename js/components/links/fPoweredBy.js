"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _PoweredBy = _interopRequireDefault(require("./PoweredBy"));

var _jsxRuntime = require("preact/jsx-runtime");

var fPoweredBy = function fPoweredBy(CompLink) {
  return function (_ref) {
    var style = _ref.style;
    return (0, _jsxRuntime.jsx)(_PoweredBy["default"], {
      style: style,
      children: (0, _jsxRuntime.jsx)(CompLink, {})
    });
  };
};

var _default = fPoweredBy;
exports["default"] = _default;
//# sourceMappingURL=fPoweredBy.js.map