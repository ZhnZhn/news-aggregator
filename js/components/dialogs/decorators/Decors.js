'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withBtLoad = require('./withBtLoad');

var _withBtLoad2 = _interopRequireDefault(_withBtLoad);

var _withClose = require('./withClose');

var _withClose2 = _interopRequireDefault(_withClose);

var _withKeyDown = require('./withKeyDown');

var _withKeyDown2 = _interopRequireDefault(_withKeyDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _initWithDecors = function _initWithDecors(instComp) {
  instComp._createCommandButtons = instComp._createWithBtLoad.bind(instComp);
  instComp._handleClose = instComp._handleCloseWith.bind(instComp);
  instComp._handleKeyDownWith = instComp._handleKeyDownWith.bind(instComp);
};

var Decors = {
  withDecors: function withDecors(target) {
    (0, _withBtLoad2.default)(target);
    (0, _withClose2.default)(target);
    (0, _withKeyDown2.default)(target);
    target.prototype._initWithDecors = _initWithDecors;
  },
  withBtLoad: _withBtLoad2.default,
  withClose: _withClose2.default,
  withKeyDown: _withKeyDown2.default
};

exports.default = Decors;
//# sourceMappingURL=Decors.js.map