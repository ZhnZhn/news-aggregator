"use strict";

exports.__esModule = true;
exports.updateNextPage = exports.toMls = void 0;
var _isTypeFn = require("../utils/isTypeFn");
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
//# sourceMappingURL=adapterFn.js.map