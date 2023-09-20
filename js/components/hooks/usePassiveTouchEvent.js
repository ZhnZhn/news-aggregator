"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
const usePassiveTouchEvent = (refElement, EVENT_NAME, onEvent) => {
  (0, _uiApi.useEffect)(() => {
    const _el = (0, _uiApi.getRefValue)(refElement);
    if (_has.HAS_TOUCH_EVENTS && _el) {
      _el.addEventListener(EVENT_NAME, onEvent, _uiApi.PASSIVE_EVENT_OPTIONS);
    }
    return () => {
      if (_has.HAS_TOUCH_EVENTS && _el) {
        _el.removeEventListener(EVENT_NAME, onEvent, _uiApi.PASSIVE_EVENT_OPTIONS);
      }
    };
  }, [EVENT_NAME, onEvent, refElement]);
};
var _default = usePassiveTouchEvent;
exports.default = _default;
//# sourceMappingURL=usePassiveTouchEvent.js.map