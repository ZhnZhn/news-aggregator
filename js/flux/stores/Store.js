"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _ComponentActions = require("../actions/ComponentActions");

var _NewsActions = require("../actions/NewsActions");

var _ComponentSlice = _interopRequireDefault(require("./ComponentSlice"));

var _NewsSlice = _interopRequireDefault(require("./NewsSlice"));

var _SettingSlice = _interopRequireDefault(require("./SettingSlice"));

var _WithLoadingProgress = _interopRequireDefault(require("./WithLoadingProgress"));

var Store = _refluxCore["default"].createStore((0, _extends2["default"])({
  listenables: [_ComponentActions.ComponentActions, _NewsActions.NewsActions]
}, _ComponentSlice["default"], _NewsSlice["default"], _SettingSlice["default"], _WithLoadingProgress["default"]));

var _default = Store;
exports["default"] = _default;
//# sourceMappingURL=Store.js.map