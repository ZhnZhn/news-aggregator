"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _hmHotkeys = require("./hm-hotkeys");
var useHotKey = function useHotKey(hotKey, onKeyDown) {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    return _hmHotkeys.HAS_HOT_KEYS && hotKey ? ((0, _hmHotkeys.addHotKey)(hotKey, onKeyDown), function () {
      return (0, _hmHotkeys.removeHotKey)(hotKey, onKeyDown);
    }) : void 0;
  }, []);
  //hotKey, onKeyDown
  /*eslint-disable react-hooks/exhaustive-deps */
};
var _default = useHotKey;
exports["default"] = _default;
//# sourceMappingURL=useHotKey.js.map