"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _SvgIcons = _interopRequireDefault(require("./svg/SvgIcons"));

var _Browser = _interopRequireDefault(require("./Browser"));

var _BrowserCaption = _interopRequireDefault(require("./BrowserCaption"));

var _ScrollPane = _interopRequireDefault(require("./ScrollPane"));

var _SpinnerLoading = _interopRequireDefault(require("./SpinnerLoading"));

var _SvgHrzResize = _interopRequireDefault(require("./SvgHrzResize"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _ShowHide = _interopRequireDefault(require("./ShowHide"));

var _ItemStack = _interopRequireDefault(require("./ItemStack"));

var Atoms = (0, _extends2["default"])({}, _SvgIcons["default"], {
  Browser: _Browser["default"],
  BrowserCaption: _BrowserCaption["default"],
  ScrollPane: _ScrollPane["default"],
  SpinnerLoading: _SpinnerLoading["default"],
  SvgHrzResize: _SvgHrzResize["default"],
  MenuItem: _MenuItem["default"],
  ShowHide: _ShowHide["default"],
  ItemStack: _ItemStack["default"]
});
var _default = Atoms;
exports["default"] = _default;
//# sourceMappingURL=Atoms.js.map