"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _dompurify = _interopRequireDefault(require("dompurify"));

//only HTML { USE_PROFILES: { html: true } }, not SVG and MathML
var _sanitize = _dompurify["default"].sanitize;

var domSanitize = function domSanitize(str) {
  return _sanitize(str, {
    USE_PROFILES: {
      html: true
    }
  });
};

var _default = domSanitize;
exports["default"] = _default;
//# sourceMappingURL=domSanitize.js.map