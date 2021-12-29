"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _splitByParagraph = _interopRequireDefault(require("./splitByParagraph"));

var _decodeHTMLEntities = _interopRequireDefault(require("./decodeHTMLEntities"));

var crDescription = function crDescription(str, maxLength) {
  return (0, _splitByParagraph["default"])((0, _decodeHTMLEntities["default"])(str), maxLength);
};

var _default = crDescription;
exports["default"] = _default;
//# sourceMappingURL=crDescription.js.map