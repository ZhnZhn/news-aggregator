"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _Store = _interopRequireDefault(require("../flux/stores/Store"));

var _ComponentActions = _interopRequireWildcard(require("../flux/actions/ComponentActions"));

var _LoadingProgressActions = require("../flux/actions/LoadingProgressActions");

var _theme = _interopRequireDefault(require("./styles/theme"));

var _ThemeContext = _interopRequireDefault(require("./hoc/ThemeContext"));

var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));

var _BrowserContainer = _interopRequireDefault(require("./zhn-containers/BrowserContainer"));

var _About = _interopRequireDefault(require("./about/About"));

var _ComponentHrzContainer = _interopRequireDefault(require("./zhn-containers/ComponentHrzContainer"));

var _ModalDialogContainer = _interopRequireDefault(require("./zhn-containers/ModalDialogContainer"));

var _RouterModalDialog = _interopRequireDefault(require("./dialogs/RouterModalDialog"));

var _NewsQuery = _interopRequireDefault(require("../conf/NewsQuery"));

var _NewsMenu = _interopRequireDefault(require("../conf/NewsMenu"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CL_COMP = "component-container";

var _fShowBrowser = function _fShowBrowser(id) {
  return _ComponentActions["default"].showBrowser.bind(_ComponentActions["default"], id);
};

var _fShowDialog = function _fShowDialog(id) {
  return _ComponentActions["default"].showNewsDialog.bind(null, id);
};

var _fSettings = function _fSettings() {
  return _ComponentActions["default"].showModalDialog.bind(_ComponentActions["default"], 'SETTINGS_DIALOG', _Store["default"].exportSettingsFn());
};

var AppNewsAggregator = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(AppNewsAggregator, _Component);

  function AppNewsAggregator(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, themeName) {
      if (actionType === _ComponentActions.TYPES.CHANGE_THEME) {
        _this.setState(function (_ref) {
          var theme = _ref.theme;
          theme.setThemeName(themeName);
          return {
            theme: (0, _extends2["default"])({}, theme)
          };
        });
      }
    };

    _this.showNewsBrowser = _fShowBrowser(_NewsMenu["default"].NEWS);
    _this.showWebz = _fShowDialog(_NewsQuery["default"].WEBZ);
    _this.showStackTagged = _fShowDialog(_NewsQuery["default"].STACK_TAGGED);
    _this.showStackSearch = _fShowDialog(_NewsQuery["default"].STACK_SEARCH);
    _this.showCryptoCompare = _fShowDialog(_NewsQuery["default"].CRYPTO_COMPARE);
    _this.showCoinStats = _fShowDialog(_NewsQuery["default"].COIN_STATS);
    _this.showMessari = _fShowDialog(_NewsQuery["default"].MESSARI);
    _this.showIex = _fShowDialog(_NewsQuery["default"].IEX);
    _this.showFmp = _fShowDialog(_NewsQuery["default"].FMP);
    _this.showNewsSearch = _fShowDialog(_NewsQuery["default"].NEWS_SEARCH);
    _this.showNewsTop = _fShowDialog(_NewsQuery["default"].NEWS_TOP);
    _this.showSettings = _fSettings();
    _this.state = {
      theme: _theme["default"]
    };
    return _this;
  }

  var _proto = AppNewsAggregator.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = _Store["default"].listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var theme = this.state.theme;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.StrictMode, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemeContext["default"].Provider, {
        value: theme,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderBar["default"], {
            store: _Store["default"],
            LOADING_ACTIONS: _LoadingProgressActions.TYPES,
            onChangeTheme: _ComponentActions["default"].changeTheme,
            onNewsSources: this.showNewsBrowser,
            onWebz: this.showWebz,
            onStackTagged: this.showStackTagged,
            onStackSearch: this.showStackSearch,
            onCryptoCompare: this.showCryptoCompare,
            onCoinStats: this.showCoinStats,
            onMessari: this.showMessari,
            onIex: this.showIex,
            onFmp: this.showFmp,
            onNewsSearch: this.showNewsSearch,
            onNewsTop: this.showNewsTop,
            onSettings: this.showSettings,
            onAbout: _ComponentActions["default"].showAbout
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: CL_COMP,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BrowserContainer["default"], {
              store: _Store["default"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_About["default"], {
              isInitShow: true,
              store: _Store["default"],
              showAction: _ComponentActions.TYPES.SHOW_ABOUT,
              hideAction: _ComponentActions.TYPES.SHOW_NEWS_PANE
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentHrzContainer["default"], {
              store: _Store["default"],
              addAction: _ComponentActions.TYPES.SHOW_NEWS_PANE
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialogContainer["default"], {
            store: _Store["default"],
            router: _RouterModalDialog["default"],
            showAction: _ComponentActions.TYPES.SHOW_MODAL_DIALOG
          })]
        })
      })
    });
  };

  return AppNewsAggregator;
}(_react.Component);

var _default = AppNewsAggregator;
exports["default"] = _default;
//# sourceMappingURL=AppNewsAggregator.js.map