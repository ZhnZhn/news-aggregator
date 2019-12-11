"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _SvgIcons = _interopRequireDefault(require("./svg/SvgIcons"));

var _ScrollPane = _interopRequireDefault(require("./ScrollPane"));

var _BrowserCaption = _interopRequireDefault(require("./BrowserCaption"));

var _SvgHrzResize = _interopRequireDefault(require("./SvgHrzResize"));

var _CircleButton = _interopRequireDefault(require("./CircleButton"));

var _FlatButton = _interopRequireDefault(require("./FlatButton"));

var _ModalButton = _interopRequireDefault(require("./ModalButton"));

var _RaisedButton = _interopRequireDefault(require("./RaisedButton"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _ShowHide = _interopRequireDefault(require("./ShowHide"));

var _Tab = _interopRequireDefault(require("./Tab"));

var _TabPane = _interopRequireDefault(require("./TabPane"));

var Atoms = (0, _extends2["default"])({}, _SvgIcons["default"], {
  ScrollPane: _ScrollPane["default"],
  BrowserCaption: _BrowserCaption["default"],
  SvgHrzResize: _SvgHrzResize["default"],
  CircleButton: _CircleButton["default"],
  FlatButton: _FlatButton["default"],
  ModalButton: _ModalButton["default"],
  RaisedButton: _RaisedButton["default"],
  MenuItem: _MenuItem["default"],
  ShowHide: _ShowHide["default"],
  Tab: _Tab["default"],
  TabPane: _TabPane["default"]
});
var _default = Atoms;
exports["default"] = _default;
//# sourceMappingURL=Atoms.js.map