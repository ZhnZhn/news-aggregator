"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("./uiApi");

var _useListen = _interopRequireDefault(require("./hooks/useListen"));

var _Store = _interopRequireDefault(require("../flux/stores/Store"));

var _ComponentActions = _interopRequireWildcard(require("../flux/actions/ComponentActions"));

var _theme = require("./styles/theme");

var _ThemeContext = _interopRequireDefault(require("./hooks/ThemeContext"));

var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));

var _BrowserContainer = _interopRequireDefault(require("./zhn-containers/BrowserContainer"));

var _About = _interopRequireDefault(require("./about/About"));

var _ComponentHrzContainer = _interopRequireDefault(require("./zhn-containers/ComponentHrzContainer"));

var _ModalDialogContainer = _interopRequireDefault(require("./zhn-containers/ModalDialogContainer"));

var _RouterModalDialog = _interopRequireDefault(require("./dialogs/RouterModalDialog"));

var _jsxRuntime = require("preact/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CL_COMP = "component-container";

var AppNewsAggregator = function AppNewsAggregator() {
  var _useState = (0, _uiApi.useState)(_theme.initialTheme),
      theme = _useState[0],
      setTheme = _useState[1],
      _showSettings = (0, _uiApi.useMemo)(function () {
    return _ComponentActions["default"].showModalDialog.bind(null, 'SETTINGS_DIALOG', _Store["default"].exportSettingsFn());
  }, []);

  (0, _useListen["default"])(_Store["default"], function (actionType, themeName) {
    if (actionType === _ComponentActions.CAT_CHANGE_THEME) {
      setTheme(function (prevTheme) {
        prevTheme.setThemeName(themeName);
        return (0, _extends2["default"])({}, prevTheme);
      });
    }
  });
  return (0, _jsxRuntime.jsx)(_ThemeContext["default"].Provider, {
    value: theme,
    children: (0, _jsxRuntime.jsxs)("div", {
      children: [(0, _jsxRuntime.jsx)(_HeaderBar["default"], {
        store: _Store["default"],
        onChangeTheme: _ComponentActions["default"].changeTheme,
        onNewsSources: _ComponentActions["default"].showNewsBrowser,
        onWebz: _ComponentActions["default"].showWebz,
        onWebzCountry: _ComponentActions["default"].showWebzCountry,
        onStackTagged: _ComponentActions["default"].showStackTagged,
        onStackSearch: _ComponentActions["default"].showStackSearch,
        onCryptoCompare: _ComponentActions["default"].showCryptoCompare,
        onCoinStats: _ComponentActions["default"].showCoinStats,
        onMessari: _ComponentActions["default"].showMessari,
        onIex: _ComponentActions["default"].showIex,
        onFmp: _ComponentActions["default"].showFmp,
        onNewsSearch: _ComponentActions["default"].showNewsSearch,
        onNewsTop: _ComponentActions["default"].showNewsTop,
        onSettings: _showSettings,
        onAbout: _ComponentActions["default"].showAbout
      }), (0, _jsxRuntime.jsxs)("div", {
        className: CL_COMP,
        children: [(0, _jsxRuntime.jsx)(_BrowserContainer["default"], {
          store: _Store["default"]
        }), (0, _jsxRuntime.jsx)(_About["default"], {
          isInitShow: true,
          store: _Store["default"],
          showAction: _ComponentActions.CAT_SHOW_ABOUT,
          hideAction: _ComponentActions.CAT_SHOW_NEWS_PANE
        }), (0, _jsxRuntime.jsx)(_ComponentHrzContainer["default"], {
          store: _Store["default"],
          addAction: _ComponentActions.CAT_SHOW_NEWS_PANE
        })]
      }), (0, _jsxRuntime.jsx)(_ModalDialogContainer["default"], {
        store: _Store["default"],
        router: _RouterModalDialog["default"],
        showAction: _ComponentActions.CAT_SHOW_MODAL_DIALOG
      })]
    })
  });
};

var _default = AppNewsAggregator;
exports["default"] = _default;
//# sourceMappingURL=AppNewsAggregator.js.map