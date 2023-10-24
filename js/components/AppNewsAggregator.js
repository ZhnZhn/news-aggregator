"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useHotKeys = _interopRequireDefault(require("./hotkeys/useHotKeys"));
var _compStore = require("../flux/compStore");
var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));
var _BrowserContainer = _interopRequireDefault(require("./zhn-containers/BrowserContainer"));
var _About = _interopRequireDefault(require("./about/About"));
var _ComponentHrzContainer = _interopRequireDefault(require("./zhn-containers/ComponentHrzContainer"));
var _ModalDialogContainer = _interopRequireDefault(require("./zhn-containers/ModalDialogContainer"));
var _RouterModalDialog = _interopRequireDefault(require("./dialogs/RouterModalDialog"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_COMP = "component-container";
const AppNewsAggregator = () => {
  (0, _useHotKeys.default)();
  return (0, _jsxRuntime.jsxs)("div", {
    children: [(0, _jsxRuntime.jsx)(_HeaderBar.default, {
      onNewsSources: _compStore.showNewsBrowser,
      onSettings: _compStore.showSettingsDialog,
      onAbout: _compStore.showAbout
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_COMP,
      children: [(0, _jsxRuntime.jsx)(_BrowserContainer.default, {
        useMsBrowser: _compStore.useMsBrowser,
        useMsDialog: _compStore.useMsDialog,
        closeDialog: _compStore.closeDialog
      }), (0, _jsxRuntime.jsx)(_About.default, {
        isInitShow: true,
        useMsAbout: _compStore.useMsAbout
      }), (0, _jsxRuntime.jsx)(_ComponentHrzContainer.default, {
        useMsPane: _compStore.useMsPane
      })]
    }), (0, _jsxRuntime.jsx)(_ModalDialogContainer.default, {
      router: _RouterModalDialog.default,
      useMsModalDialog: _compStore.useMsModalDialog
    })]
  });
};
var _default = exports.default = AppNewsAggregator;
//# sourceMappingURL=AppNewsAggregator.js.map