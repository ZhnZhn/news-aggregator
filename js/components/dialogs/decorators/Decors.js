"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _withBtLoad = _interopRequireDefault(require("./withBtLoad"));

var _withClose = _interopRequireDefault(require("./withClose"));

var _withKeyDown = _interopRequireDefault(require("./withKeyDown"));

var _initWithDecors = function _initWithDecors(instComp) {
  instComp._createCommandButtons = instComp._createWithBtLoad.bind(instComp);
  instComp._handleClose = instComp._handleCloseWith.bind(instComp);
  instComp._handleKeyDownWith = instComp._handleKeyDownWith.bind(instComp);
};

var Decors = {
  withDecors: function withDecors(target) {
    (0, _withBtLoad["default"])(target);
    (0, _withClose["default"])(target);
    (0, _withKeyDown["default"])(target);
    target.prototype._initWithDecors = _initWithDecors;
  },
  withBtLoad: _withBtLoad["default"],
  withClose: _withClose["default"],
  withKeyDown: _withKeyDown["default"]
};
var _default = Decors;
exports["default"] = _default;
//# sourceMappingURL=Decors.js.map