'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Store = require('../flux/stores/Store');

var _Store2 = _interopRequireDefault(_Store);

var _ComponentActions = require('../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _LoadingProgressActions = require('../flux/actions/LoadingProgressActions');

var _HeaderBar = require('./header/HeaderBar');

var _HeaderBar2 = _interopRequireDefault(_HeaderBar);

var _BrowserContainer = require('./zhn-containers/BrowserContainer');

var _BrowserContainer2 = _interopRequireDefault(_BrowserContainer);

var _About = require('./about/About');

var _About2 = _interopRequireDefault(_About);

var _ComponentHrzContainer = require('./zhn-containers/ComponentHrzContainer');

var _ComponentHrzContainer2 = _interopRequireDefault(_ComponentHrzContainer);

var _ModalDialogContainer = require('./zhn-containers/ModalDialogContainer');

var _ModalDialogContainer2 = _interopRequireDefault(_ModalDialogContainer);

var _RouterModalDialog = require('./dialogs/RouterModalDialog');

var _RouterModalDialog2 = _interopRequireDefault(_RouterModalDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_COMP = "component-container";

var _webhose = {
  "type": "W_WEBHOSE",
  "dialogType": "WebhoseQuery",
  "paneCaption": "Webhose Query",
  "paneId": "webhose",
  "dialogProps": {
    "caption": "Webhose Query",
    "source": "webhose"
  }
};

var AppNewsAggregator = function AppNewsAggregator() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_HeaderBar2.default, {
      store: _Store2.default,
      LOADING_ACTIONS: _LoadingProgressActions.TYPES,
      onNewsSources: _ComponentActions2.default.showBrowser.bind(_ComponentActions2.default, 'NEWS_API_ORG'),
      onQuery: _ComponentActions2.default.showNewsDialog.bind(null, _webhose),
      onSettings: _ComponentActions2.default.showModalDialog.bind(_ComponentActions2.default, 'SETTINGS_DIALOG', _Store2.default.exportSettingsFn()),
      onAbout: _ComponentActions2.default.showAbout
    }),
    _react2.default.createElement(
      'div',
      { className: CL_COMP },
      _react2.default.createElement(_BrowserContainer2.default, {
        store: _Store2.default
      }),
      _react2.default.createElement(_About2.default, {
        isInitShow: true,
        store: _Store2.default,
        showAction: _ComponentActions.TYPES.SHOW_ABOUT,
        hideAction: _ComponentActions.TYPES.SHOW_NEWS_PANE
      }),
      _react2.default.createElement(_ComponentHrzContainer2.default, {
        store: _Store2.default,
        addAction: _ComponentActions.TYPES.SHOW_NEWS_PANE
      })
    ),
    _react2.default.createElement(_ModalDialogContainer2.default, {
      store: _Store2.default,
      router: _RouterModalDialog2.default,
      showAction: _ComponentActions.TYPES.SHOW_MODAL_DIALOG
    })
  );
};

exports.default = AppNewsAggregator;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\AppNewsAggregator.js.map