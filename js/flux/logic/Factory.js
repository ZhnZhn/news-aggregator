"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createNewsPane = exports.createDialog = void 0;
var _NewsActions = require("../actions/NewsActions");
var _compStore = require("../compStore");
var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));
var _RouterPane = _interopRequireDefault(require("../../components/panes/RouterPane"));
var _jsxRuntime = require("preact/jsx-runtime");
const loadNews = _NewsActions.NewsActions.loadNews;
const createDialog = itemConf => {
  const {
      type,
      dialogType,
      dialogProps
    } = itemConf,
    El = _RouterDialog.default.getElement(dialogType);
  return (0, _jsxRuntime.jsx)(El, {
    type: type,
    itemConf: itemConf,
    ...dialogProps,
    onShow: _compStore.showNewsPane.bind(null, itemConf),
    onLoad: loadNews
  }, type);
};
exports.createDialog = createDialog;
const createNewsPane = (itemConf, useMsPane, store) => {
  const {
      type,
      paneType,
      paneCaption,
      paneId
    } = itemConf,
    [CompPane, CompItem] = _RouterPane.default.getElement(paneType);
  return (0, _jsxRuntime.jsx)(CompPane, {
    id: paneId,
    paneCaption: paneCaption,
    store: store,
    Item: CompItem,
    addAction: _NewsActions.NAT_LOAD_NEWS_COMPLETED,
    updateAction: _NewsActions.NAT_UPDATE_NEWS,
    useMsPane: useMsPane,
    onRemoveItems: _NewsActions.NewsActions.removeAllNews.bind(null, paneId),
    onRemoveUnder: _NewsActions.NewsActions.removeUnderNews,
    onCloseItem: _NewsActions.NewsActions.removeNews
  }, type);
};
exports.createNewsPane = createNewsPane;
//# sourceMappingURL=Factory.js.map