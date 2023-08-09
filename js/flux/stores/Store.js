"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
var _NewsActions = require("../actions/NewsActions");
var _NewsSlice = _interopRequireDefault(require("./NewsSlice"));
const Store = _refluxCore.default.createStore({
  listenables: [_NewsActions.NewsActions],
  ..._NewsSlice.default
});
var _default = Store;
exports.default = _default;
//# sourceMappingURL=Store.js.map