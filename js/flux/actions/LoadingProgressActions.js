"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.TYPES = void 0;

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _Reflux$createActions;

var TYPES = {
  LOADING: 'loadingProgress',
  LOADING_COMPLETE: 'loadingProgressComplete',
  LOADING_FAILED: 'loadingProgressFailed'
};
exports.TYPES = TYPES;

var LoadingProgressActions = _refluxCore["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[TYPES.LOADING] = {}, _Reflux$createActions[TYPES.LOADING_COMPLETE] = {}, _Reflux$createActions[TYPES.LOADING_FAILED] = {}, _Reflux$createActions));

var _default = LoadingProgressActions;
exports["default"] = _default;
//# sourceMappingURL=LoadingProgressActions.js.map