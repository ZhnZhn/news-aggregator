"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createNewsPane = exports.createDialog = void 0;
var _storeApi = require("../storeApi");
var _compStore = require("../compStore");
var _itemStore = require("../itemStore");
var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));
var _RouterPane = _interopRequireDefault(require("../../components/panes/RouterPane"));
var _jsxRuntime = require("preact/jsx-runtime");
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
    onShow: (0, _storeApi.bindTo)(_compStore.showNewsPane, itemConf),
    onLoad: _itemStore.loadItem
  }, type);
};
exports.createDialog = createDialog;
const createNewsPane = (itemConf, useMsPane) => {
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
    Item: CompItem,
    useMsPane: useMsPane,
    useMsItem: _itemStore.useMsItem,
    onRemoveItems: (0, _storeApi.bindTo)(_itemStore.removeItems, paneId),
    onRemoveUnder: _itemStore.removeUnderItems,
    onCloseItem: _itemStore.removeItem
  }, type);
};
exports.createNewsPane = createNewsPane;
//# sourceMappingURL=Factory.js.map