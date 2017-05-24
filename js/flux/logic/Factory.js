'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentActions = require('../actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _NewsActions = require('../actions/NewsActions');

var _NewsActions2 = _interopRequireDefault(_NewsActions);

var _RouterDialog = require('../../components/dialogs/RouterDialog');

var _RouterDialog2 = _interopRequireDefault(_RouterDialog);

var _RouterPane = require('../../components/panes/RouterPane');

var _RouterPane2 = _interopRequireDefault(_RouterPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showNewsPane = _ComponentActions2.default.showNewsPane;
var loadNews = _NewsActions2.default.loadNews;

var Factory = {
  createDialog: function createDialog(itemConf) {
    var type = itemConf.type,
        dialogType = itemConf.dialogType,
        dialogProps = itemConf.dialogProps,
        El = _RouterDialog2.default.getElement(dialogType);

    return _react2.default.createElement(El, (0, _extends3.default)({
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
        El = _RouterPane2.default.getElement(paneType);

    return _react2.default.createElement(El, {
      key: type,
      id: paneId,
      paneCaption: paneCaption,
      store: store,
      addAction: _NewsActions.TYPES.LOAD_NEWS_COMPLETED,
      showAction: _ComponentActions.TYPES.SHOW_NEWS_PANE,
      toggleAction: _ComponentActions.TYPES.TOGGLE_NEWS_PANE,
      onCloseItem: _NewsActions2.default.removeNews
    });
  }
};

exports.default = Factory;
//# sourceMappingURL=D:\_Dev\_React\_News\js\flux\logic\Factory.js.map