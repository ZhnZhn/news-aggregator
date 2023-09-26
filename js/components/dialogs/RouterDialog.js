"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DialogType = _interopRequireDefault(require("./DialogType1"));
var _DialogType2 = _interopRequireDefault(require("./DialogType2"));
var _WebzQueryDialog = _interopRequireDefault(require("./WebzQueryDialog"));
var _WebzCountryDialog = _interopRequireDefault(require("./WebzCountryDialog"));
const R = {
  DF: _DialogType.default,
  DialogType1: _DialogType.default,
  DialogType2: _DialogType2.default,
  WebzQuery: _WebzQueryDialog.default,
  WebzCountry: _WebzCountryDialog.default
};
const RouterDialog = {
  getElement: type => R[type] || R.DF
};
var _default = exports.default = RouterDialog;
//# sourceMappingURL=RouterDialog.js.map