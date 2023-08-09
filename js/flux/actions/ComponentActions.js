"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ComponentActions = exports.CAT_UPDATE_BROWSER = exports.CAT_TOGGLE_NEWS_PANE = exports.CAT_SHOW_NEWS_PANE = exports.CAT_SHOW_BROWSER = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
var _NewsMenu = _interopRequireDefault(require("../../conf/NewsMenu"));
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
  [CAT_SHOW_NEWS_PANE]: {},
  [CAT_TOGGLE_NEWS_PANE]: {},
  [CAT_CLOSE_NEWS_PANE]: {},
  [CAT_REMOVE_NEWS_BADGES]: {},
  [CAT_SHOW_BROWSER]: {},
  [CAT_UPDATE_BROWSER]: {}
});
const _fShowBrowser = id => Actions.showBrowser.bind(null, id);
Actions.showNewsBrowser = _fShowBrowser(_NewsMenu.default.NEWS);
const ComponentActions = Actions;
exports.ComponentActions = ComponentActions;
//# sourceMappingURL=ComponentActions.js.map