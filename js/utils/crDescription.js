"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.crDescription = void 0;
var _splitByParagraph = _interopRequireDefault(require("./splitByParagraph"));
var _decodeHTMLEntities = require("./decodeHTMLEntities");
const crDescription = (str, maxLength) => (0, _splitByParagraph.default)((0, _decodeHTMLEntities.decodeHTMLEntities)(str), maxLength);
exports.crDescription = crDescription;
//# sourceMappingURL=crDescription.js.map