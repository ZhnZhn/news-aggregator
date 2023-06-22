"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("./uiApi");
var _useListen = _interopRequireDefault(require("./hooks/useListen"));
var _useHotKeys = _interopRequireDefault(require("./hotkeys/useHotKeys"));
var _Store = _interopRequireDefault(require("../flux/stores/Store"));
var _ComponentActions = require("../flux/actions/ComponentActions");
var _theme = require("./styles/theme");
var _ThemeContext = _interopRequireDefault(require("./hooks/ThemeContext"));
var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));
var _BrowserContainer = _interopRequireDefault(require("./zhn-containers/BrowserContainer"));
var _About = _interopRequireDefault(require("./about/About"));
var _ComponentHrzContainer = _interopRequireDefault(require("./zhn-containers/ComponentHrzContainer"));
var _ModalDialogContainer = _interopRequireDefault(require("./zhn-containers/ModalDialogContainer"));
var _RouterModalDialog = _interopRequireDefault(require("./dialogs/RouterModalDialog"));
var _jsxRuntime = require("preact/jsx-runtime");
var CL_COMP = "component-container";
var _showSettings = _ComponentActions.ComponentActions.showModalDialog.bind(null, 'SETTINGS_DIALOG', _Store["default"].exportSettingsFn());
var AppNewsAggregator = function AppNewsAggregator() {
  var _useState = (0, _uiApi.useState)(_theme.initialTheme),
    theme = _useState[0],
    setTheme = _useState[1];
  (0, _useListen["default"])(_Store["default"], function (actionType, themeName) {
    if (actionType === _ComponentActions.CAT_CHANGE_THEME) {
      setTheme(function (prevTheme) {
        prevTheme.setThemeName(themeName);
        return (0, _extends2["default"])({}, prevTheme);
      });
    }
  });
  (0, _useHotKeys["default"])();
  return (0, _jsxRuntime.jsx)(_ThemeContext["default"].Provider, {
    value: theme,
    children: (0, _jsxRuntime.jsxs)("div", {
      children: [(0, _jsxRuntime.jsx)(_HeaderBar["default"], {
        store: _Store["default"],
        onChangeTheme: _ComponentActions.ComponentActions.changeTheme,
        onNewsSources: _ComponentActions.ComponentActions.showNewsBrowser,
        onWebz: _ComponentActions.ComponentActions.showWebz,
        onWebzCountry: _ComponentActions.ComponentActions.showWebzCountry,
        onReddit: _ComponentActions.ComponentActions.showReddit,
        onDevTo: _ComponentActions.ComponentActions.showDevTo,
        onStackTagged: _ComponentActions.ComponentActions.showStackTagged,
        onStackSearch: _ComponentActions.ComponentActions.showStackSearch,
        onCryptoCompare: _ComponentActions.ComponentActions.showCryptoCompare,
        onCoinStats: _ComponentActions.ComponentActions.showCoinStats,
        onMessari: _ComponentActions.ComponentActions.showMessari,
        onIex: _ComponentActions.ComponentActions.showIex,
        onFmp: _ComponentActions.ComponentActions.showFmp,
        onAv: _ComponentActions.ComponentActions.showAv,
        onNewsSearch: _ComponentActions.ComponentActions.showNewsSearch,
        onNewsTop: _ComponentActions.ComponentActions.showNewsTop,
        onTheNewsSearch: _ComponentActions.ComponentActions.showTheNewsSearch,
        onTheNewsTop: _ComponentActions.ComponentActions.showTheNewsTop,
        onSettings: _showSettings,
        onAbout: _ComponentActions.ComponentActions.showAbout
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