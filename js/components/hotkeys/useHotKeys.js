"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _hmHotkeys = require("./hm-hotkeys");
const _onKeyDown = evt => {
  if ((evt.altKey || evt.metaKey) && evt.key) {
    const _onKeyDownHotKey = _hmHotkeys.hmHotKeys[evt.key.toUpperCase()];
    if ((0, _uiApi.isFn)(_onKeyDownHotKey)) {
      evt.stopImmediatePropagation();
      _onKeyDownHotKey();
    }
  }
};
const useHotKeys = () => {
  (0, _uiApi.useEffect)(() => _hmHotkeys.HAS_HOT_KEYS ? (document.addEventListener(_hmHotkeys.HOT_KEY_EVENT, _onKeyDown, false), () => {
    (0, _hmHotkeys.clearHotKeys)();
    document.removeEventListener(_hmHotkeys.HOT_KEY_EVENT, _onKeyDown, false);
  }) : void 0, []);
};
var _default = exports.default = useHotKeys;
//# sourceMappingURL=useHotKeys.js.map