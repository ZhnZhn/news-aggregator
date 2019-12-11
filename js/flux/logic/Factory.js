"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _ComponentActions = _interopRequireWildcard(require("../actions/ComponentActions"));

var _NewsActions = _interopRequireWildcard(require("../actions/NewsActions"));

var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));

var _RouterPane = _interopRequireDefault(require("../../components/panes/RouterPane"));

var showNewsPane = _ComponentActions["default"].showNewsPane;
var closeNewsPane = _ComponentActions["default"].closeNewsPane;
var loadNews = _NewsActions["default"].loadNews;
var Factory = {
  createDialog: function createDialog(itemConf) {
    var type = itemConf.type,
        dialogType = itemConf.dialogType,
        dialogProps = itemConf.dialogProps,
        El = _RouterDialog["default"].getElement(dialogType);

    return _react["default"].createElement(El, (0, _extends2["default"])({
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

    return _react["default"].createElement(Pane, {
      key: type,
      id: paneId,
      paneCaption: paneCaption,
      store: store,
      Item: Item,
      addAction: _NewsActions.TYPES.LOAD_NEWS_COMPLETED,
      showAction: _ComponentActions.TYPES.SHOW_NEWS_PANE,
      toggleAction: _ComponentActions.TYPES.TOGGLE_NEWS_PANE,
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