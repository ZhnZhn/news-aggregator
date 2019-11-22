'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _SvgIcons = require('./svg/SvgIcons');

var _SvgIcons2 = _interopRequireDefault(_SvgIcons);

var _ScrollPane = require('./ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _BrowserCaption = require('./BrowserCaption');

var _BrowserCaption2 = _interopRequireDefault(_BrowserCaption);

var _SvgHrzResize = require('./SvgHrzResize');

var _SvgHrzResize2 = _interopRequireDefault(_SvgHrzResize);

var _CircleButton = require('./CircleButton');

var _CircleButton2 = _interopRequireDefault(_CircleButton);

var _FlatButton = require('./FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _ModalButton = require('./ModalButton');

var _ModalButton2 = _interopRequireDefault(_ModalButton);

var _RaisedButton = require('./RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _ShowHide = require('./ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Atoms = (0, _extends3.default)({}, _SvgIcons2.default, {

  ScrollPane: _ScrollPane2.default,
  BrowserCaption: _BrowserCaption2.default,

  SvgHrzResize: _SvgHrzResize2.default,

  CircleButton: _CircleButton2.default,
  FlatButton: _FlatButton2.default,
  ModalButton: _ModalButton2.default,
  RaisedButton: _RaisedButton2.default,

  MenuItem: _MenuItem2.default,
  ShowHide: _ShowHide2.default,

  Tab: _Tab2.default,
  TabPane: _TabPane2.default
});

exports.default = Atoms;
//# sourceMappingURL=Atoms.js.map