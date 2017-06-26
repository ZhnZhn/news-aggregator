'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _ThemeProvider = require('./hoc/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _theme = require('./styles/theme');

var _theme2 = _interopRequireDefault(_theme);

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

var AppNewsAggregator = function (_Component) {
  (0, _inherits3.default)(AppNewsAggregator, _Component);

  function AppNewsAggregator() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AppNewsAggregator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AppNewsAggregator.__proto__ || Object.getPrototypeOf(AppNewsAggregator)).call.apply(_ref, [this].concat(args))), _this), _this._onStore = function (actionType) {
      if (actionType === _ComponentActions.TYPES.CHANGE_THEME) {
        _this.forceUpdate();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: _theme2.default },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_HeaderBar2.default, {
            store: _Store2.default,
            LOADING_ACTIONS: _LoadingProgressActions.TYPES,
            onChangeTheme: _ComponentActions2.default.changeTheme,
            onNewsSources: _ComponentActions2.default.showBrowser.bind(_ComponentActions2.default, 'NEWS_API_ORG'),
            onQuery: _ComponentActions2.default.showNewsDialog.bind(null, _NewsQuery2.default.WEBHOSE),
            onStackTagged: _ComponentActions2.default.showNewsDialog.bind(null, _NewsQuery2.default.STACK_TAGGED),
            onStackSearch: _ComponentActions2.default.showNewsDialog.bind(null, _NewsQuery2.default.STACK_SEARCH),
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
        )
      );
    }
  }]);
  return AppNewsAggregator;
}(_react.Component);

exports.default = AppNewsAggregator;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\AppNewsAggregator.js.map