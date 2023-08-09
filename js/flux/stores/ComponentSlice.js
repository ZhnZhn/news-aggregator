"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ComponentActions = require("../actions/ComponentActions");
var _ComponentSliceFn = require("./ComponentSliceFn");
const ComponentSlice = {
  newsPaneInit: {},
  onShowNewsPane(itemConf) {
    const pane = (0, _ComponentSliceFn.showNewsPane)(this.newsPaneInit, itemConf, this);
    this.trigger(_ComponentActions.CAT_SHOW_NEWS_PANE, pane);
  },
  onToggleNewsPane(itemConf) {
    const pane = (0, _ComponentSliceFn.toggleNewsPane)(itemConf);
    this.trigger(_ComponentActions.CAT_TOGGLE_NEWS_PANE, pane);
  }
};
var _default = ComponentSlice;
exports.default = _default;
//# sourceMappingURL=ComponentSlice.js.map