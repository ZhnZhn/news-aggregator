'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Comp = require('../../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createCommandButtons = function _createCommandButtons(S) {
  return [_react2.default.createElement(_Comp2.default.RaisedButton, {
    key: '_load',
    rootStyle: S.RAISED_ROOT,
    clDiv: S.CL_RAISED_DIV,
    caption: 'Load',
    isPrimary: true,
    onClick: this._handleLoad
  })];
};

var withBtLoad = function withBtLoad(target) {
  target.prototype._createWithBtLoad = _createCommandButtons;
};

exports.default = withBtLoad;
//# sourceMappingURL=withBtLoad.js.map