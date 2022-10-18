"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _ComponentActions = require("../actions/ComponentActions");

var _ComponentSliceFn = require("./ComponentSliceFn");

var ComponentSlice = {
  dialogInit: {},
  newsPaneInit: {},
  hmBrowser: {},
  onShowNewsDialog: function onShowNewsDialog(itemConf, event) {
    var r = (0, _ComponentSliceFn.showNewsDialog)(this.dialogInit, itemConf);
    this.trigger(_ComponentActions.CAT_SHOW_NEWS_DIALOG, r);
  },
  onShowModalDialog: function onShowModalDialog(type, option) {
    if (option === void 0) {
      option = {};
    }

    option.modalDialogType = type;
    this.trigger(_ComponentActions.CAT_SHOW_MODAL_DIALOG, option);
  },
  onShowNewsPane: function onShowNewsPane(itemConf) {
    var pane = (0, _ComponentSliceFn.showNewsPane)(this.newsPaneInit, itemConf, this);
    var browser = (0, _ComponentSliceFn.updateBadge)(this.hmBrowser, itemConf);
    this.trigger(_ComponentActions.CAT_SHOW_NEWS_PANE, pane);
    this.trigger(_ComponentActions.CAT_UPDATE_BROWSER, browser);
  },
  onToggleNewsPane: function onToggleNewsPane(itemConf) {
    var browser = (0, _ComponentSliceFn.toggleBadge)(this.hmBrowser, itemConf);
    var pane = (0, _ComponentSliceFn.toggleNewsPane)(itemConf);
    this.trigger(_ComponentActions.CAT_TOGGLE_NEWS_PANE, pane);
    this.trigger(_ComponentActions.CAT_UPDATE_BROWSER, browser);
  },
  onCloseNewsPane: function onCloseNewsPane(itemConf) {
    var r = (0, _ComponentSliceFn.updateBadge)(this.hmBrowser, itemConf, {
      isOpen: false
    });
    this.trigger(_ComponentActions.CAT_UPDATE_BROWSER, r);
  },
  onRemoveNewsBadges: function onRemoveNewsBadges(itemConf) {
    var r = (0, _ComponentSliceFn.removeBadges)(this.hmBrowser, itemConf);
    this.trigger(_ComponentActions.CAT_UPDATE_BROWSER, r);
  },
  onShowAbout: function onShowAbout() {
    this.trigger(_ComponentActions.CAT_SHOW_ABOUT);
  },
  onShowBrowser: function onShowBrowser(browserId) {
    this.trigger(_ComponentActions.CAT_SHOW_BROWSER, browserId);
  },
  onUpdateBrowser: function onUpdateBrowser(itemConf, option) {
    var r = (0, _ComponentSliceFn.createResult)(this.hmBrowser, itemConf);
    this.trigger(_ComponentActions.CAT_UPDATE_BROWSER, r);
  },
  onChangeTheme: function onChangeTheme(themeName) {
    this.trigger(_ComponentActions.CAT_CHANGE_THEME, themeName);
  }
};
var _default = ComponentSlice;
exports["default"] = _default;
//# sourceMappingURL=ComponentSlice.js.map