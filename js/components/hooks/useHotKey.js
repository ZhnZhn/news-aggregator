"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var KEY_DOWN = 'keydown';
var useHotKey = function useHotKey(ref, onKeyDown, hotKey) {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    var _div = ref.current,
      _onKeyDown = function _onKeyDown(evt) {
        if ((evt.altKey || evt.metaKey) && evt.key && evt.key.toUpperCase() === hotKey) {
          evt.stopPropagation();
          onKeyDown();
        }
      };
    if (_div) {
      _div.addEventListener(KEY_DOWN, _onKeyDown, false);
    }
    return function () {
      _div.removeEventLister(KEY_DOWN, _onKeyDown, false);
    };
  }, []);
  //ref, onKeyDown, hotKey
  /*eslint-enable react-hooks/exhaustive-deps */
};
var _default = useHotKey;
exports["default"] = _default;
//# sourceMappingURL=useHotKey.js.map