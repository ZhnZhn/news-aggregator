"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _compStore = require("../../flux/compStore");
var _NewsMenu = _interopRequireDefault(require("../../conf/NewsMenu"));
var _NewsBrowser = _interopRequireDefault(require("../source-browsers/NewsBrowser"));
var _DialogContainer = _interopRequireDefault(require("./DialogContainer"));
var _jsxRuntime = require("preact/jsx-runtime");
const BrowserContainer = props => (0, _jsxRuntime.jsxs)("div", {
  className: _crStyle.CL_HRZ_CONTAINER,
  children: [(0, _jsxRuntime.jsx)(_NewsBrowser.default, {
    browserId: _NewsMenu.default.NEWS,
    useMsBrowser: props.useMsBrowser,
    onClick: _compStore.showDialog,
    onError: _compStore.showAlertDialog
  }), (0, _jsxRuntime.jsx)(_DialogContainer.default, {
    maxDialog: 3,
    useMsDialog: props.useMsDialog,
    closeDialog: props.closeDialog
  })]
});
var _default = exports.default = BrowserContainer;
//# sourceMappingURL=BrowserContainer.js.map