"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var pipe = function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function (x) {
    return fns.reduce(function (v, fn) {
      return fn(v);
    }, x);
  };
};

var _default = pipe;
exports["default"] = _default;
//# sourceMappingURL=pipe.js.map