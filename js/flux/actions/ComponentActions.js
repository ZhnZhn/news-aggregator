"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ComponentActions = exports.CAT_TOGGLE_NEWS_PANE = exports.CAT_SHOW_NEWS_PANE = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
const CAT_SHOW_NEWS_PANE = 'showNewsPane';
exports.CAT_SHOW_NEWS_PANE = CAT_SHOW_NEWS_PANE;
const CAT_TOGGLE_NEWS_PANE = 'toggleNewsPane';
exports.CAT_TOGGLE_NEWS_PANE = CAT_TOGGLE_NEWS_PANE;
const CAT_CLOSE_NEWS_PANE = 'closeNewsPane';
const CAT_REMOVE_NEWS_BADGES = 'removeNewsBadges';
const Actions = _refluxCore.default.createActions({
  [CAT_SHOW_NEWS_PANE]: {},
  [CAT_TOGGLE_NEWS_PANE]: {},
  [CAT_CLOSE_NEWS_PANE]: {},
  [CAT_REMOVE_NEWS_BADGES]: {}
});
const ComponentActions = Actions;
exports.ComponentActions = ComponentActions;
//# sourceMappingURL=ComponentActions.js.map