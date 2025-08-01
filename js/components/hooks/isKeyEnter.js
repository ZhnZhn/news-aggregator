"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const isKeyEnter = _ref => {
  let {
    key
  } = _ref;
  return key === _uiApi.KEY_ENTER || key === _uiApi.KEY_SPACE;
};
var _default = exports.default = isKeyEnter;
//# sourceMappingURL=isKeyEnter.js.map