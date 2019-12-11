"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Comp = _interopRequireDefault(require("../../Comp"));

var _createCommandButtons = function _createCommandButtons(S) {
  return [_react["default"].createElement(_Comp["default"].RaisedButton, {
    key: "_load",
    rootStyle: S.RAISED_ROOT,
    clDiv: S.CL_RAISED_DIV,
    caption: "Load",
    isPrimary: true,
    onClick: this._handleLoad
  })];
};

var withBtLoad = function withBtLoad(target) {
  target.prototype._createWithBtLoad = _createCommandButtons;
};

var _default = withBtLoad;
exports["default"] = _default;
//# sourceMappingURL=withBtLoad.js.map