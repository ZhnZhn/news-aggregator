"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _hmHotkeys = require("./hm-hotkeys");
var _onKeyDown = function _onKeyDown(evt) {
  if ((evt.altKey || evt.metaKey) && evt.key) {
    var _onKeyDownHotKey = _hmHotkeys.hmHotKeys[evt.key.toUpperCase()];
    if (typeof _onKeyDownHotKey === 'function') {
      evt.stopImmediatePropagation();
      _onKeyDownHotKey();
    }
  }
};
var useHotKeys = function useHotKeys() {
  (0, _uiApi.useEffect)(function () {
    return _hmHotkeys.HAS_HOT_KEYS ? (document.addEventListener(_hmHotkeys.HOT_KEY_EVENT, _onKeyDown, false), function () {
      (0, _hmHotkeys.clearHotKeys)();
      document.removeEventListener(_hmHotkeys.HOT_KEY_EVENT, _onKeyDown, false);
    }) : void 0;
  }, []);
};
var _default = useHotKeys;
exports["default"] = _default;
//# sourceMappingURL=useHotKeys.js.map