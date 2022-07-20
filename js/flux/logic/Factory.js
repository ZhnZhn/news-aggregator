"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../../components/uiApi");

var _ComponentActions = _interopRequireWildcard(require("../actions/ComponentActions"));

var _NewsActions = _interopRequireWildcard(require("../actions/NewsActions"));

var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));

var _RouterPane = _interopRequireDefault(require("../../components/panes/RouterPane"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var showNewsPane = _ComponentActions["default"].showNewsPane;
var closeNewsPane = _ComponentActions["default"].closeNewsPane;
var loadNews = _NewsActions["default"].loadNews;
var Factory = {
  createDialog: function createDialog(itemConf) {
    var type = itemConf.type,
        dialogType = itemConf.dialogType,
        dialogProps = itemConf.dialogProps,
        El = _RouterDialog["default"].getElement(dialogType);

    return (0, _uiApi.createElement)(El, (0, _extends2["default"])({
      key: type,
      type: type,
      itemConf: itemConf
    }, dialogProps, {
      onShow: showNewsPane.bind(null, itemConf),
      onLoad: loadNews
    }));
  },
  createNewsPane: function createNewsPane(itemConf, store) {
    var type = itemConf.type,
        paneType = itemConf.paneType,
        paneCaption = itemConf.paneCaption,
        paneId = itemConf.paneId,
        _RouterPane$getElemen = _RouterPane["default"].getElement(paneType),
        Pane = _RouterPane$getElemen.Pane,
        Item = _RouterPane$getElemen.Item;

    return (0, _uiApi.createElement)(Pane, {
      key: type,
      id: paneId,
      paneCaption: paneCaption,
      store: store,
      Item: Item,
      addAction: _NewsActions.NAT_LOAD_NEWS_COMPLETED,
      showAction: _ComponentActions.CAT_SHOW_NEWS_PANE,
      toggleAction: _ComponentActions.CAT_TOGGLE_NEWS_PANE,
      onRemoveItems: _NewsActions["default"].removeAllNews.bind(null, paneId),
      onRemoveUnder: _NewsActions["default"].removeUnderNews,
      onCloseItem: _NewsActions["default"].removeNews,
      onClose: closeNewsPane.bind(null, itemConf)
    });
  }
};
var _default = Factory;
exports["default"] = _default;
//# sourceMappingURL=Factory.js.map