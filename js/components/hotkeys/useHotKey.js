"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _hmHotkeys = require("./hm-hotkeys");
var useHotKey = function useHotKey(hotKey, onKeyDown) {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    if (hotKey && !_has.HAS_TOUCH_EVENTS) {
      (0, _hmHotkeys.addHotKey)(hotKey, onKeyDown);
    }
    return function () {
      (0, _hmHotkeys.removeHotKey)(hotKey, onKeyDown);
    };
  }, []);
  //hotKey, onKeyDown
  /*eslint-disable react-hooks/exhaustive-deps */
};
var _default = useHotKey;
exports["default"] = _default;
//# sourceMappingURL=useHotKey.js.map