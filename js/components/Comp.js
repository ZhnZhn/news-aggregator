'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Atoms = require('./zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

var _A = require('./zhn-m-input/A');

var _A2 = _interopRequireDefault(_A);

var _A3 = require('./zhn-moleculs/A');

var _A4 = _interopRequireDefault(_A3);

var _Links = require('./links/Links');

var _Links2 = _interopRequireDefault(_Links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comp = (0, _extends3.default)({}, _Atoms2.default, _A2.default, _A4.default, {
  Link: _Links2.default
});

exports.default = Comp;
//# sourceMappingURL=Comp.js.map