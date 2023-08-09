"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ComponentActions = exports.CAT_UPDATE_BROWSER = exports.CAT_TOGGLE_NEWS_PANE = exports.CAT_SHOW_NEWS_PANE = exports.CAT_SHOW_NEWS_DIALOG = exports.CAT_SHOW_MODAL_DIALOG = exports.CAT_SHOW_BROWSER = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
var _NewsQuery = _interopRequireDefault(require("../../conf/NewsQuery"));
var _NewsMenu = _interopRequireDefault(require("../../conf/NewsMenu"));
const CAT_SHOW_NEWS_DIALOG = 'showNewsDialog';
exports.CAT_SHOW_NEWS_DIALOG = CAT_SHOW_NEWS_DIALOG;
const CAT_SHOW_MODAL_DIALOG = 'showModalDialog';
exports.CAT_SHOW_MODAL_DIALOG = CAT_SHOW_MODAL_DIALOG;
const CAT_SHOW_NEWS_PANE = 'showNewsPane';
exports.CAT_SHOW_NEWS_PANE = CAT_SHOW_NEWS_PANE;
const CAT_TOGGLE_NEWS_PANE = 'toggleNewsPane';
exports.CAT_TOGGLE_NEWS_PANE = CAT_TOGGLE_NEWS_PANE;
const CAT_CLOSE_NEWS_PANE = 'closeNewsPane';
const CAT_REMOVE_NEWS_BADGES = 'removeNewsBadges';
const CAT_SHOW_BROWSER = 'showBrowser';
exports.CAT_SHOW_BROWSER = CAT_SHOW_BROWSER;
const CAT_UPDATE_BROWSER = 'updateBrowser';
exports.CAT_UPDATE_BROWSER = CAT_UPDATE_BROWSER;
const Actions = _refluxCore.default.createActions({
  [CAT_SHOW_NEWS_DIALOG]: {},
  [CAT_SHOW_MODAL_DIALOG]: {},
  [CAT_SHOW_NEWS_PANE]: {},
  [CAT_TOGGLE_NEWS_PANE]: {},
  [CAT_CLOSE_NEWS_PANE]: {},
  [CAT_REMOVE_NEWS_BADGES]: {},
  [CAT_SHOW_BROWSER]: {},
  [CAT_UPDATE_BROWSER]: {}
});
const _fShowDialog = id => Actions.showNewsDialog.bind(null, id);
Actions.showWebz = _fShowDialog(_NewsQuery.default.WEBZ);
Actions.showWebzCountry = _fShowDialog(_NewsQuery.default.WEBZ_COUNTRY);
Actions.showReddit = _fShowDialog(_NewsQuery.default.REDDIT);
Actions.showDevTo = _fShowDialog(_NewsQuery.default.DEV_TO);
Actions.showStackTagged = _fShowDialog(_NewsQuery.default.STACK_TAGGED);
Actions.showStackSearch = _fShowDialog(_NewsQuery.default.STACK_SEARCH);
Actions.showCryptoCompare = _fShowDialog(_NewsQuery.default.CRYPTO_COMPARE);
Actions.showCoinStats = _fShowDialog(_NewsQuery.default.COIN_STATS);
Actions.showMessari = _fShowDialog(_NewsQuery.default.MESSARI);
Actions.showIex = _fShowDialog(_NewsQuery.default.IEX);
Actions.showFmp = _fShowDialog(_NewsQuery.default.FMP);
Actions.showAv = _fShowDialog(_NewsQuery.default.AV);
Actions.showNewsSearch = _fShowDialog(_NewsQuery.default.NEWS_SEARCH);
Actions.showNewsTop = _fShowDialog(_NewsQuery.default.NEWS_TOP);
Actions.showTheNewsSearch = _fShowDialog(_NewsQuery.default.THE_NEWS_SEARCH);
Actions.showTheNewsTop = _fShowDialog(_NewsQuery.default.THE_NEWS_TOP);
const _fShowBrowser = id => Actions.showBrowser.bind(null, id);
Actions.showNewsBrowser = _fShowBrowser(_NewsMenu.default.NEWS);
const ComponentActions = Actions;
exports.ComponentActions = ComponentActions;
//# sourceMappingURL=ComponentActions.js.map