"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _hmHotkeys = require("./hm-hotkeys");
var useRefHotKey = function useRefHotKey(ref, hotKey, onKeyDown) {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    var _element = _hmHotkeys.HAS_HOT_KEYS && ref && ref.current,
      _onKeyDown = function _onKeyDown(evt) {
        if ((evt.altKey || evt.metaKey) && evt.key && evt.key.toUpperCase() === hotKey) {
          evt.stopImmediatePropagation();
          onKeyDown();
        }
      };
    return _element && typeof onKeyDown === 'function' ? (_element.addEventListener(_hmHotkeys.HOT_KEY_EVENT, _onKeyDown, false), function () {
      return _element.removeEventLister(_hmHotkeys.HOT_KEY_EVENT, _onKeyDown, false);
    }) : void 0;
  }, []);
  //ref, hotKey, onKeyDown
  /*eslint-enable react-hooks/exhaustive-deps */
};
var _default = useRefHotKey;
exports["default"] = _default;
//# sourceMappingURL=useRefHotKey.js.map