"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var DF_PERIOD = 800;
var _getNowTime = Date.now || function () {
  return new Date.getTime();
};
var throttleFn = function throttleFn(fn, period) {
  if (period === void 0) {
    period = DF_PERIOD;
  }
  var prevTime = 0;
  return function throttled() {
    var nowTime = _getNowTime();
    if (nowTime - prevTime > period) {
      prevTime = nowTime;
      return fn.apply(void 0, arguments);
    }
  };
};
var _default = throttleFn;
exports["default"] = _default;
//# sourceMappingURL=throttleFn.js.map