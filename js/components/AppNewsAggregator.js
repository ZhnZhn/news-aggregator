"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useHotKeys = _interopRequireDefault(require("./hotkeys/useHotKeys"));
var _storeAtoms = require("../flux/storeAtoms");
var _Store = _interopRequireDefault(require("../flux/stores/Store"));
var _ComponentActions = require("../flux/actions/ComponentActions");
var _compStore = require("../flux/compStore");
var _ThemeContext = _interopRequireDefault(require("./hooks/ThemeContext"));
var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));
var _BrowserContainer = _interopRequireDefault(require("./zhn-containers/BrowserContainer"));
var _About = _interopRequireDefault(require("./about/About"));
var _ComponentHrzContainer = _interopRequireDefault(require("./zhn-containers/ComponentHrzContainer"));
var _ModalDialogContainer = _interopRequireDefault(require("./zhn-containers/ModalDialogContainer"));
var _RouterModalDialog = _interopRequireDefault(require("./dialogs/RouterModalDialog"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_COMP = "component-container";
const AppNewsAggregator = () => {
  const uiTheme = (0, _storeAtoms.useUiTheme)();
  (0, _useHotKeys.default)();
  return (0, _jsxRuntime.jsx)(_ThemeContext.default.Provider, {
    value: uiTheme,
    children: (0, _jsxRuntime.jsxs)("div", {
      children: [(0, _jsxRuntime.jsx)(_HeaderBar.default, {
        onNewsSources: _compStore.showNewsBrowser,
        onWebz: _compStore.showWebz,
        onWebzCountry: _compStore.showWebzCountry,
        onReddit: _compStore.showReddit,
        onDevTo: _compStore.showDevTo,
        onStackTagged: _compStore.showStackTagged,
        onStackSearch: _compStore.showStackSearch,
        onCryptoCompare: _compStore.showCryptoCompare,
        onCoinStats: _compStore.showCoinStats,
        onMessari: _compStore.showMessari,
        onIex: _compStore.showIex,
        onFmp: _compStore.showFmp,
        onAv: _compStore.showAv,
        onNewsSearch: _compStore.showNewsSearch,
        onNewsTop: _compStore.showNewsTop,
        onTheNewsSearch: _compStore.showTheNewsSearch,
        onTheNewsTop: _compStore.showTheNewsTop,
        onSettings: _compStore.showSettingsDialog,
        onAbout: _compStore.showAbout
      }), (0, _jsxRuntime.jsxs)("div", {
        className: CL_COMP,
        children: [(0, _jsxRuntime.jsx)(_BrowserContainer.default, {
          useMsBrowser: _compStore.useMsBrowser,
          useMsDialog: _compStore.useMsDialog
        }), (0, _jsxRuntime.jsx)(_About.default, {
          isInitShow: true,
          store: _Store.default,
          useMsAbout: _compStore.useMsAbout,
          hideAction: _ComponentActions.CAT_SHOW_NEWS_PANE
        }), (0, _jsxRuntime.jsx)(_ComponentHrzContainer.default, {
          store: _Store.default,
          addAction: _ComponentActions.CAT_SHOW_NEWS_PANE
        })]
      }), (0, _jsxRuntime.jsx)(_ModalDialogContainer.default, {
        router: _RouterModalDialog.default,
        useMsModalDialog: _compStore.useMsModalDialog
      })]
    })
  });
};
var _default = AppNewsAggregator;
exports.default = _default;
//# sourceMappingURL=AppNewsAggregator.js.map