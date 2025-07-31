"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const SCROLL_OPTIONS = {
  block: 'center',
  behavior: 'smooth'
};
const _setItemFocus = (elItem, ref) => elItem ? (elItem.scrollIntoView(SCROLL_OPTIONS), elItem.focus(), (0, _uiApi.setRefValue)(ref, elItem), !0) : !1;
const _fFocusItem = propName => ref => {
  const _elItem = ((0, _uiApi.getRefValue)(ref) || {})[propName];
  return _setItemFocus(_elItem, ref);
};
const _focusNextItem = _fFocusItem('nextSibling');
const _focusPrevItem = _fFocusItem('previousSibling');
const useKeyDownArrow = onClose => {
  const _refFocus = (0, _uiApi.useRef)();
  /*eslint-disable react-hooks/exhaustive-deps */
  return [_refFocus, (0, _uiApi.useCallback)(evt => {
    if (evt.key === _uiApi.KEY_ARROW_DOWN) {
      (0, _uiApi.stopDefaultFor)(evt);
      _focusNextItem(_refFocus);
    } else if (evt.key === _uiApi.KEY_ARROW_UP) {
      (0, _uiApi.stopDefaultFor)(evt);
      _focusPrevItem(_refFocus);
    } else if (evt.key === _uiApi.KEY_ESCAPE || evt.key === _uiApi.KEY_TAB) {
      onClose();
    }
  }, [])
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */];
};
var _default = exports.default = useKeyDownArrow;
//# sourceMappingURL=useKeyDownArrow.js.map