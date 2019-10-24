'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Store = require('../flux/stores/Store');

var _Store2 = _interopRequireDefault(_Store);

var _ComponentActions = require('../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _LoadingProgressActions = require('../flux/actions/LoadingProgressActions');

var _theme = require('./styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _ThemeContext = require('./hoc/ThemeContext');

var _ThemeContext2 = _interopRequireDefault(_ThemeContext);

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

var _NewsQuery = require('../conf/NewsQuery');

var _NewsQuery2 = _interopRequireDefault(_NewsQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_COMP = "component-container";

var _fShowBrowser = function _fShowBrowser(id) {
  return _ComponentActions2.default.showBrowser.bind(_ComponentActions2.default, id);
};
var _fShowDialog = function _fShowDialog(id) {
  return _ComponentActions2.default.showNewsDialog.bind(null, id);
};
var _fSettings = function _fSettings() {
  return _ComponentActions2.default.showModalDialog.bind(_ComponentActions2.default, 'SETTINGS_DIALOG', _Store2.default.exportSettingsFn());
};

var AppNewsAggregator = function (_Component) {
  (0, _inherits3.default)(AppNewsAggregator, _Component);

  function AppNewsAggregator(props) {
    (0, _classCallCheck3.default)(this, AppNewsAggregator);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AppNewsAggregator.__proto__ || Object.getPrototypeOf(AppNewsAggregator)).call(this, props));

    _this._onStore = function (actionType, themeName) {
      if (actionType === _ComponentActions.TYPES.CHANGE_THEME) {
        _this.setState(function (_ref) {
          var theme = _ref.theme;

          theme.setThemeName(themeName);
          return {
            theme: (0, _extends3.default)({}, theme)
          };
        });
      }
    };

    _this.showNewsBrowser = _fShowBrowser('NEWS_API_ORG');

    _this.showWebhoseWeb = _fShowDialog(_NewsQuery2.default.WEBHOSE_WEB);
    _this.showWebhoseBrodcast = _fShowDialog(_NewsQuery2.default.WEBHOSE_BRODCAST);
    _this.showStackTagged = _fShowDialog(_NewsQuery2.default.STACK_TAGGED);
    _this.showStackSearch = _fShowDialog(_NewsQuery2.default.STACK_SEARCH);
    _this.showIex = _fShowDialog(_NewsQuery2.default.IEX);
    _this.showNewsSearch = _fShowDialog(_NewsQuery2.default.NEWS_SEARCH);
    _this.showNewsTop = _fShowDialog(_NewsQuery2.default.NEWS_TOP);

    _this.showSettings = _fSettings();
    _this.state = {
      theme: _theme2.default
    };
    return _this;
  }

  (0, _createClass3.default)(AppNewsAggregator, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = _Store2.default.listen(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var theme = this.state.theme;

      return _react2.default.createElement(
        _ThemeContext2.default.Provider,
        { value: theme },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_HeaderBar2.default, {
            store: _Store2.default,
            LOADING_ACTIONS: _LoadingProgressActions.TYPES,
            onChangeTheme: _ComponentActions2.default.changeTheme,
            onNewsSources: this.showNewsBrowser,
            onQuery: this.showWebhoseWeb,
            onWebhoseBrodcast: this.showWebhoseBrodcast,
            onStackTagged: this.showStackTagged,
            onStackSearch: this.showStackSearch,
            onIex: this.showIex,
            onNewsSearch: this.showNewsSearch,
            onNewsTop: this.showNewsTop,
            onSettings: this.showSettings,
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
        )
      );
    }
  }]);
  return AppNewsAggregator;
}(_react.Component);

exports.default = AppNewsAggregator;
//# sourceMappingURL=AppNewsAggregator.js.map