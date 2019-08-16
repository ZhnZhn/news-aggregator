'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _ComponentActions = require('../actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _NewsActions = require('../actions/NewsActions');

var _NewsActions2 = _interopRequireDefault(_NewsActions);

var _LoadingProgressActions = require('../actions/LoadingProgressActions');

var _LoadingProgressActions2 = _interopRequireDefault(_LoadingProgressActions);

var _ComponentSlice = require('./ComponentSlice');

var _ComponentSlice2 = _interopRequireDefault(_ComponentSlice);

var _NewsSlice = require('./NewsSlice');

var _NewsSlice2 = _interopRequireDefault(_NewsSlice);

var _SettingSlice = require('./SettingSlice');

var _SettingSlice2 = _interopRequireDefault(_SettingSlice);

var _WithLoadingProgress = require('./WithLoadingProgress');

var _WithLoadingProgress2 = _interopRequireDefault(_WithLoadingProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = _reflux2.default.createStore((0, _extends3.default)({
  listenables: [_ComponentActions2.default, _NewsActions2.default, _LoadingProgressActions2.default]

}, _ComponentSlice2.default, _NewsSlice2.default, _SettingSlice2.default, _WithLoadingProgress2.default));

exports.default = Store;
//# sourceMappingURL=Store.js.map