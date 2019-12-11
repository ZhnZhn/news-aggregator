"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _is = _interopRequireDefault(require("../utils/is"));

var INITIAL_WIDTH = 635,
    _isInnerWidth = function _isInnerWidth() {
  return window && window.innerWidth;
};

var has = {
  HAS_TOUCH: _is["default"].isTouchable(),
  wideWidth: function wideWidth() {
    return _isInnerWidth() ? window.innerWidth > 700 : true;
  },
  getWidth: function getWidth() {
    return _isInnerWidth() ? window.innerWidth - 16 : INITIAL_WIDTH;
  },
  initWidthStyle: function initWidthStyle(initialWidth) {
    if (initialWidth === void 0) {
      initialWidth = INITIAL_WIDTH;
    }

    return {
      width: !has.wideWidth() ? has.getWidth() : initialWidth
    };
  }
};
var _default = has;
exports["default"] = _default;
//# sourceMappingURL=has.js.map