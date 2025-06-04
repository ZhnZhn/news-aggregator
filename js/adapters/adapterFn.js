"use strict";

exports.__esModule = true;
exports.updateNextPage = exports.toMls = exports.crTitle = exports.crDescription = void 0;
var _isTypeFn = require("../utils/isTypeFn");
var _splitByParagraph = require("../utils/splitByParagraph");
var _decodeHTMLEntities = require("../utils/decodeHTMLEntities");
const toMls = sec => (0, _isTypeFn.isNumber)(sec) ? sec * 1000 : void 0;
exports.toMls = toMls;
const MLS_FREQUENCY_RESTRICTION = 15000;
const updateNextPage = (option, mlsFr) => {
  if (!option._nextPage) {
    option._nextPage = 1;
  }
  option._nextPage += 1;
  option._mlsFr = mlsFr || MLS_FREQUENCY_RESTRICTION;
};
exports.updateNextPage = updateNextPage;
const crTitle = title => (0, _decodeHTMLEntities.decodeHTMLEntities)(title);
exports.crTitle = crTitle;
const crDescription = (str, maxLength) => (0, _splitByParagraph.splitByParagraph)((0, _decodeHTMLEntities.decodeHTMLEntities)(str), maxLength);
exports.crDescription = crDescription;
//# sourceMappingURL=adapterFn.js.map