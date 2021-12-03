"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _isArr = Array.isArray;

var _getStyle = function _getStyle(arrOrStr) {
  return _isArr(arrOrStr) ? arrOrStr[0] ? arrOrStr[1] : void 0 : arrOrStr || void 0;
};

var crStyle = function crStyle(conf1, conf2) {
  var _s1 = _getStyle(conf1),
      _s2 = _getStyle(conf2);

  return _s1 ? _s2 ? (0, _extends2["default"])({}, _s1, _s2) : _s1 : _s2 || void 0;
};

var _default = crStyle;
exports["default"] = _default;
//# sourceMappingURL=crStyle.js.map