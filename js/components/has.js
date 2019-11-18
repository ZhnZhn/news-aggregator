'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('../utils/is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_WIDTH = 635,
    _isInnerWidth = function _isInnerWidth() {
  return window && window.innerWidth;
};

var has = {
  HAS_TOUCH: _is2.default.isTouchable(),

  wideWidth: function wideWidth() {
    return _isInnerWidth() ? window.innerWidth > 700 : true;
  },
  getWidth: function getWidth() {
    return _isInnerWidth() ? window.innerWidth - 16 : INITIAL_WIDTH;
  },
  initWidthStyle: function initWidthStyle() {
    var initialWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_WIDTH;
    return {
      width: !has.wideWidth() ? has.getWidth() : initialWidth
    };
  }
};

exports.default = has;
//# sourceMappingURL=has.js.map