'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

//230, 236, 240

var _config = {
  DF: { h: '#404040' },
  WHITE: { h: '#dfe4e7', d: 'white' },
  SAND: { h: '#c6bda5', d: '#e8e0cb' }
},
    _crBg = function _crBg(color) {
  return {
    backgroundColor: color
  };
},
    _crStyles = function _crStyles() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      h = _ref.h,
      d = _ref.d;

  var _S = {
    HEADER: _crBg(h)
  };
  if (d) {
    _S.DESCR = _crBg(d);
  }
  return _S;
};

var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(CSS_RULE, themeName) {
    return _crStyles(_config[themeName] || _config.DF);
  }
};

exports.default = styleConfig;
//# sourceMappingURL=Article.Style.js.map