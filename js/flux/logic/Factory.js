"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createNewsPane = exports.createDialog = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ComponentActions = require("../actions/ComponentActions");

var _NewsActions = require("../actions/NewsActions");

var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));

var _RouterPane = _interopRequireDefault(require("../../components/panes/RouterPane"));

var _jsxRuntime = require("preact/jsx-runtime");

var showNewsPane = _ComponentActions.ComponentActions.showNewsPane,
    closeNewsPane = _ComponentActions.ComponentActions.closeNewsPane,
    loadNews = _NewsActions.NewsActions.loadNews;

var createDialog = function createDialog(itemConf) {
  var type = itemConf.type,
      dialogType = itemConf.dialogType,
      dialogProps = itemConf.dialogProps,
      El = _RouterDialog["default"].getElement(dialogType);

  return (0, _jsxRuntime.jsx)(El, (0, _extends2["default"])({
    type: type,
    itemConf: itemConf
  }, dialogProps, {
    onShow: showNewsPane.bind(null, itemConf),
    onLoad: loadNews
  }), type);
};

exports.createDialog = createDialog;

var createNewsPane = function createNewsPane(itemConf, store) {
  var type = itemConf.type,
      paneType = itemConf.paneType,
      paneCaption = itemConf.paneCaption,
      paneId = itemConf.paneId,
      _RouterPane$getElemen = _RouterPane["default"].getElement(paneType),
      Pane = _RouterPane$getElemen.Pane,
      Item = _RouterPane$getElemen.Item;

  return (0, _jsxRuntime.jsx)(Pane, {
    id: paneId,
    paneCaption: paneCaption,
    store: store,
    Item: Item,
    addAction: _NewsActions.NAT_LOAD_NEWS_COMPLETED,
    updateAction: _NewsActions.NAT_UPDATE_NEWS,
    showAction: _ComponentActions.CAT_SHOW_NEWS_PANE,
    toggleAction: _ComponentActions.CAT_TOGGLE_NEWS_PANE,
    onRemoveItems: _NewsActions.NewsActions.removeAllNews.bind(null, paneId),
    onRemoveUnder: _NewsActions.NewsActions.removeUnderNews,
    onCloseItem: _NewsActions.NewsActions.removeNews,
    onClose: closeNewsPane.bind(null, itemConf)
  }, type);
};

exports.createNewsPane = createNewsPane;
//# sourceMappingURL=Factory.js.map