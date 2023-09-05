"use strict";

exports.__esModule = true;
exports.crDescription = void 0;
var _splitByParagraph = require("./splitByParagraph");
var _decodeHTMLEntities = require("./decodeHTMLEntities");
const crDescription = (str, maxLength) => (0, _splitByParagraph.splitByParagraph)((0, _decodeHTMLEntities.decodeHTMLEntities)(str), maxLength);
exports.crDescription = crDescription;
//# sourceMappingURL=crDescription.js.map