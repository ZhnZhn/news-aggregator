"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ComponentActions = require("../actions/ComponentActions");
var _ComponentSliceFn = require("./ComponentSliceFn");
const ComponentSlice = {
  dialogInit: {},
  newsPaneInit: {},
  hmBrowser: {},
  onShowNewsDialog(itemConf, event) {
    const r = (0, _ComponentSliceFn.showNewsDialog)(this.dialogInit, itemConf);
    this.trigger(_ComponentActions.CAT_SHOW_NEWS_DIALOG, r);
  },
  onShowNewsPane(itemConf) {
    const pane = (0, _ComponentSliceFn.showNewsPane)(this.newsPaneInit, itemConf, this);
    const browser = (0, _ComponentSliceFn.updateBadge)(this.hmBrowser, itemConf);
    this.trigger(_ComponentActions.CAT_SHOW_NEWS_PANE, pane);
    this.trigger(_ComponentActions.CAT_UPDATE_BROWSER, browser);
  },
  onToggleNewsPane(itemConf) {
    const browser = (0, _ComponentSliceFn.toggleBadge)(this.hmBrowser, itemConf);
    const pane = (0, _ComponentSliceFn.toggleNewsPane)(itemConf);
    this.trigger(_ComponentActions.CAT_TOGGLE_NEWS_PANE, pane);
    this.trigger(_ComponentActions.CAT_UPDATE_BROWSER, browser);
  },
  onCloseNewsPane(itemConf) {
    const r = (0, _ComponentSliceFn.updateBadge)(this.hmBrowser, itemConf, {
      isOpen: false
    });
    this.trigger(_ComponentActions.CAT_UPDATE_BROWSER, r);
  },
  onRemoveNewsBadges(itemConf) {
    const r = (0, _ComponentSliceFn.removeBadges)(this.hmBrowser, itemConf);
    this.trigger(_ComponentActions.CAT_UPDATE_BROWSER, r);
  },
  onShowBrowser(browserId) {
    this.trigger(_ComponentActions.CAT_SHOW_BROWSER, browserId);
  },
  onUpdateBrowser(itemConf, option) {
    const r = (0, _ComponentSliceFn.createResult)(this.hmBrowser, itemConf);
    this.trigger(_ComponentActions.CAT_UPDATE_BROWSER, r);
  }
};
var _default = ComponentSlice;
exports.default = _default;
//# sourceMappingURL=ComponentSlice.js.map