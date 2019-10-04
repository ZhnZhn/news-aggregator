'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _SvgIcons = require('./svg/SvgIcons');

var _SvgIcons2 = _interopRequireDefault(_SvgIcons);

var _FlatButton = require('./FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _ModalButton = require('./ModalButton');

var _ModalButton2 = _interopRequireDefault(_ModalButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Atoms = (0, _extends3.default)({}, _SvgIcons2.default, {
  FlatButton: _FlatButton2.default,
  ModalButton: _ModalButton2.default
});

exports.default = Atoms;
//# sourceMappingURL=Atoms.js.map