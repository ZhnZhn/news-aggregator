"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var pipe = function pipe() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
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

exports.default = pipe;
//# sourceMappingURL=pipe.js.map