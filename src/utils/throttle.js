//undescore.js throttle

const _dateGetTime = () => (new Date()).getTime();
const _getDateNow = Date.now || _dateGetTime;

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.

const throttle = function(
  func,
  wait,
  options={}
) {
  let timeout
  , context
  , args
  , result
  , previous = 0;

  const later = function() {
    previous = options.leading === false
       ? 0
       : _getDateNow();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null
    }
  };

  const throttled = function(...inArgs) {
    const now = _getDateNow();
    if (!previous && options.leading === false) {
      previous = now
    }
    const remaining = wait - (now - previous);
    context = this;
    args = inArgs;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
};

export default throttle
