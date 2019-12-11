"use strict";

exports.__esModule = true;
exports["default"] = void 0;

//230, 236, 240
var _config = {
  DF: {
    h: '#404040'
  },
  WHITE: {
    h: '#dfe4e7',
    d: 'white'
  },
  SAND: {
    h: '#c6bda5',
    d: '#e8e0cb'
  }
},
    _crBg = function _crBg(color) {
  return {
    backgroundColor: color
  };
},
    _crStyles = function _crStyles(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
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
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=Article.Style.js.map