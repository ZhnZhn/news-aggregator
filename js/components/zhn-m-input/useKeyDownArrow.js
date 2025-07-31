"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _OptionFn = require("./OptionFn");
const useKeyDownArrow = onClose => {
  const _refItemFocused = (0, _uiApi.useRef)();
  /*eslint-disable react-hooks/exhaustive-deps */
  return [_refItemFocused, (0, _uiApi.useCallback)(evt => {
    if (evt.key === _uiApi.KEY_ARROW_DOWN || evt.key === _uiApi.KEY_TAB) {
      (0, _uiApi.stopDefaultFor)(evt);
      (0, _OptionFn.focusNextItem)(_refItemFocused);
    } else if (evt.key === _uiApi.KEY_ARROW_UP) {
      (0, _uiApi.stopDefaultFor)(evt);
      (0, _OptionFn.focusPrevItem)(_refItemFocused);
    } else if (evt.key === _uiApi.KEY_HOME) {
      (0, _uiApi.stopDefaultFor)(evt);
      (0, _OptionFn.focusFirstItem)(_refItemFocused);
    } else if (evt.key === _uiApi.KEY_END) {
      (0, _uiApi.stopDefaultFor)(evt);
      (0, _OptionFn.focusLastItem)(_refItemFocused);
    } else if (evt.key === _uiApi.KEY_ESCAPE) {
      (0, _uiApi.stopDefaultFor)(evt);
      onClose();
    }
  }, [])
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */];
};
var _default = exports.default = useKeyDownArrow;
//# sourceMappingURL=useKeyDownArrow.js.map