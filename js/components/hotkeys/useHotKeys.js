"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _hmHotkeys = require("./hm-hotkeys");
var KEY_DOWN = 'keydown';
var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};
var useHotKeys = function useHotKeys() {
  (0, _uiApi.useEffect)(function () {
    var _onKeyDown = function _onKeyDown(evt) {
      if ((evt.altKey || evt.metaKey) && evt.key) {
        var _onKeyDownHotKey = _hmHotkeys.hmHotKeys[evt.key.toUpperCase()];
        if (_isFn(_onKeyDownHotKey)) {
          evt.stopImmediatePropagation();
          _onKeyDownHotKey();
        }
      }
    };
    document.addEventListener(KEY_DOWN, _onKeyDown, false);
    return function () {
      (0, _hmHotkeys.clearHotKeys)();
      document.removeEventListener(KEY_DOWN, _onKeyDown, false);
    };
  }, []);
};
var _default = useHotKeys;
exports["default"] = _default;
//# sourceMappingURL=useHotKeys.js.map