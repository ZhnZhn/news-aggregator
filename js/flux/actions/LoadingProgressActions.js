'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPES = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _Reflux$createActions;

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPES = exports.TYPES = {
  LOADING: 'loadingProgress',
  LOADING_COMPLETE: 'loadingProgressComplete',
  LOADING_FAILED: 'loadingProgressFailed'
};

var LoadingProgressActions = _reflux2.default.createActions((_Reflux$createActions = {}, (0, _defineProperty3.default)(_Reflux$createActions, TYPES.LOADING, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.LOADING_COMPLETE, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.LOADING_FAILED, {}), _Reflux$createActions));

exports.default = LoadingProgressActions;
//# sourceMappingURL=D:\_Dev\_React\_News\js\flux\actions\LoadingProgressActions.js.map