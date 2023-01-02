"use strict";

exports.__esModule = true;
exports["default"] = void 0;
//undescore.js throttle

var _dateGetTime = function _dateGetTime() {
  return new Date().getTime();
};
var _getDateNow = Date.now || _dateGetTime;

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.

var throttle = function throttle(func, wait, options) {
  if (options === void 0) {
    options = {};
  }
  var timeout,
    context,
    args,
    result,
    previous = 0;
  var later = function later() {
    previous = options.leading === false ? 0 : _getDateNow();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };
  var throttled = function throttled() {
    var now = _getDateNow();
    if (!previous && options.leading === false) {
      previous = now;
    }
    var remaining = wait - (now - previous);
    context = this;
    for (var _len = arguments.length, inArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      inArgs[_key] = arguments[_key];
    }
    args = inArgs;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };
  return throttled;
};
var _default = throttle;
exports["default"] = _default;
//# sourceMappingURL=throttle.js.map