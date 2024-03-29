"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _compStore = require("../../flux/compStore");
var _NewsMenu = _interopRequireDefault(require("../../conf/NewsMenu"));
var _NewsBrowser = _interopRequireDefault(require("../source-browsers/NewsBrowser"));
var _DialogContainer = _interopRequireDefault(require("./DialogContainer"));
var _jsxRuntime = require("preact/jsx-runtime");
const BrowserContainer = _ref => {
  let {
    useMsBrowser,
    useMsDialog,
    closeDialog
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    className: "hrz-container",
    children: [(0, _jsxRuntime.jsx)(_NewsBrowser.default, {
      browserId: _NewsMenu.default.NEWS,
      useMsBrowser: useMsBrowser,
      onClick: _compStore.showDialog,
      onError: _compStore.showAlertDialog
    }), (0, _jsxRuntime.jsx)(_DialogContainer.default, {
      maxDialog: 3,
      useMsDialog: useMsDialog,
      closeDialog: closeDialog
    })]
  });
};
var _default = exports.default = BrowserContainer;
//# sourceMappingURL=BrowserContainer.js.map