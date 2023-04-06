"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ComponentActions = exports.CAT_UPDATE_BROWSER = exports.CAT_TOGGLE_NEWS_PANE = exports.CAT_SHOW_NEWS_PANE = exports.CAT_SHOW_NEWS_DIALOG = exports.CAT_SHOW_MODAL_DIALOG = exports.CAT_SHOW_BROWSER = exports.CAT_SHOW_ABOUT = exports.CAT_CHANGE_THEME = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
var _NewsQuery = _interopRequireDefault(require("../../conf/NewsQuery"));
var _NewsMenu = _interopRequireDefault(require("../../conf/NewsMenu"));
var _Reflux$createActions;
var CAT_SHOW_NEWS_DIALOG = 'showNewsDialog';
exports.CAT_SHOW_NEWS_DIALOG = CAT_SHOW_NEWS_DIALOG;
var CAT_SHOW_MODAL_DIALOG = 'showModalDialog';
exports.CAT_SHOW_MODAL_DIALOG = CAT_SHOW_MODAL_DIALOG;
var CAT_SHOW_NEWS_PANE = 'showNewsPane';
exports.CAT_SHOW_NEWS_PANE = CAT_SHOW_NEWS_PANE;
var CAT_TOGGLE_NEWS_PANE = 'toggleNewsPane';
exports.CAT_TOGGLE_NEWS_PANE = CAT_TOGGLE_NEWS_PANE;
var CAT_CLOSE_NEWS_PANE = 'closeNewsPane';
var CAT_REMOVE_NEWS_BADGES = 'removeNewsBadges';
var CAT_SHOW_ABOUT = 'showAbout';
exports.CAT_SHOW_ABOUT = CAT_SHOW_ABOUT;
var CAT_SHOW_BROWSER = 'showBrowser';
exports.CAT_SHOW_BROWSER = CAT_SHOW_BROWSER;
var CAT_UPDATE_BROWSER = 'updateBrowser';
exports.CAT_UPDATE_BROWSER = CAT_UPDATE_BROWSER;
var CAT_CHANGE_THEME = 'changeTheme';
exports.CAT_CHANGE_THEME = CAT_CHANGE_THEME;
var Actions = _refluxCore["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[CAT_SHOW_NEWS_DIALOG] = {}, _Reflux$createActions[CAT_SHOW_MODAL_DIALOG] = {}, _Reflux$createActions[CAT_SHOW_NEWS_PANE] = {}, _Reflux$createActions[CAT_TOGGLE_NEWS_PANE] = {}, _Reflux$createActions[CAT_CLOSE_NEWS_PANE] = {}, _Reflux$createActions[CAT_REMOVE_NEWS_BADGES] = {}, _Reflux$createActions[CAT_SHOW_ABOUT] = {}, _Reflux$createActions[CAT_SHOW_BROWSER] = {}, _Reflux$createActions[CAT_UPDATE_BROWSER] = {}, _Reflux$createActions[CAT_CHANGE_THEME] = {}, _Reflux$createActions));
var _fShowDialog = function _fShowDialog(id) {
  return Actions.showNewsDialog.bind(null, id);
};
Actions.showWebz = _fShowDialog(_NewsQuery["default"].WEBZ);
Actions.showWebzCountry = _fShowDialog(_NewsQuery["default"].WEBZ_COUNTRY);
Actions.showReddit = _fShowDialog(_NewsQuery["default"].REDDIT);
Actions.showStackTagged = _fShowDialog(_NewsQuery["default"].STACK_TAGGED);
Actions.showStackSearch = _fShowDialog(_NewsQuery["default"].STACK_SEARCH);
Actions.showCryptoCompare = _fShowDialog(_NewsQuery["default"].CRYPTO_COMPARE);
Actions.showCoinStats = _fShowDialog(_NewsQuery["default"].COIN_STATS);
Actions.showMessari = _fShowDialog(_NewsQuery["default"].MESSARI);
Actions.showIex = _fShowDialog(_NewsQuery["default"].IEX);
Actions.showFmp = _fShowDialog(_NewsQuery["default"].FMP);
Actions.showAv = _fShowDialog(_NewsQuery["default"].AV);
Actions.showNewsSearch = _fShowDialog(_NewsQuery["default"].NEWS_SEARCH);
Actions.showNewsTop = _fShowDialog(_NewsQuery["default"].NEWS_TOP);
Actions.showTheNewsSearch = _fShowDialog(_NewsQuery["default"].THE_NEWS_SEARCH);
Actions.showTheNewsTop = _fShowDialog(_NewsQuery["default"].THE_NEWS_TOP);
var _fShowBrowser = function _fShowBrowser(id) {
  return Actions.showBrowser.bind(null, id);
};
Actions.showNewsBrowser = _fShowBrowser(_NewsMenu["default"].NEWS);
var ComponentActions = Actions;
exports.ComponentActions = ComponentActions;
//# sourceMappingURL=ComponentActions.js.map