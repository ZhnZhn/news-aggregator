"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.TYPES = void 0;

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _Reflux$createActions;

var TYPES = {
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
exports.TYPES = TYPES;

var Actions = _refluxCore["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[TYPES.SHOW_NEWS_DIALOG] = {}, _Reflux$createActions[TYPES.SHOW_MODAL_DIALOG] = {}, _Reflux$createActions[TYPES.SHOW_NEWS_PANE] = {}, _Reflux$createActions[TYPES.TOGGLE_NEWS_PANE] = {}, _Reflux$createActions[TYPES.CLOSE_NEWS_PANE] = {}, _Reflux$createActions[TYPES.SHOW_ABOUT] = {}, _Reflux$createActions[TYPES.SHOW_BROWSER] = {}, _Reflux$createActions[TYPES.UPDATE_BROWSER] = {}, _Reflux$createActions[TYPES.CHANGE_THEME] = {}, _Reflux$createActions));

var _default = Actions;
exports["default"] = _default;
//# sourceMappingURL=ComponentActions.js.map