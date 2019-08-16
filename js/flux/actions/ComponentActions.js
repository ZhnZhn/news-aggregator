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
  SHOW_NEWS_DIALOG: 'showNewsDialog',
  SHOW_MODAL_DIALOG: 'showModalDialog',

  SHOW_NEWS_PANE: 'showNewsPane',
  TOGGLE_NEWS_PANE: 'toggleNewsPane',
  CLOSE_NEWS_PANE: 'closeNewsPane',

  SHOW_ABOUT: 'showAbout',

  SHOW_BROWSER: 'showBrowser',
  UPDATE_BROWSER: 'updateBrowser',

  CHANGE_THEME: 'changeTheme'
};

var Actions = _reflux2.default.createActions((_Reflux$createActions = {}, (0, _defineProperty3.default)(_Reflux$createActions, TYPES.SHOW_NEWS_DIALOG, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.SHOW_MODAL_DIALOG, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.SHOW_NEWS_PANE, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.TOGGLE_NEWS_PANE, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.CLOSE_NEWS_PANE, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.SHOW_ABOUT, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.SHOW_BROWSER, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.UPDATE_BROWSER, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.CHANGE_THEME, {}), _Reflux$createActions));

exports.default = Actions;
//# sourceMappingURL=ComponentActions.js.map