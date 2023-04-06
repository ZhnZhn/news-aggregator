"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _NewsPane = _interopRequireDefault(require("./NewsPane"));
var _Article = _interopRequireDefault(require("../items/Article"));
var _StackItem = _interopRequireDefault(require("../items/StackItem"));
var R = {
  DF: [_NewsPane["default"], _Article["default"]],
  STACK_ITEM: [_NewsPane["default"], _StackItem["default"]]
};
var RouterPane = {
  getElement: function getElement(type) {
    return R[type] || R.DF;
  }
};
var _default = RouterPane;
exports["default"] = _default;
//# sourceMappingURL=RouterPane.js.map