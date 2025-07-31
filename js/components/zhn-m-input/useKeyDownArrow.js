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
const _fFocusParentItem = propName => ref => {
  const _elItem = (((0, _uiApi.getRefValue)(ref) || {}).parentNode || {})[propName];
  _setItemFocus(_elItem, ref);
};
const _focusFirstItem = _fFocusParentItem('firstChild');
const _focusLastItem = _fFocusParentItem('lastChild');
const useKeyDownArrow = onClose => {
  const _refItemFocused = (0, _uiApi.useRef)();
  /*eslint-disable react-hooks/exhaustive-deps */
  return [_refItemFocused, (0, _uiApi.useCallback)(evt => {
    if (evt.key === _uiApi.KEY_ARROW_DOWN || evt.key === _uiApi.KEY_TAB) {
      (0, _uiApi.stopDefaultFor)(evt);
      _focusNextItem(_refItemFocused);
    } else if (evt.key === _uiApi.KEY_ARROW_UP) {
      (0, _uiApi.stopDefaultFor)(evt);
      _focusPrevItem(_refItemFocused);
    } else if (evt.key === _uiApi.KEY_HOME) {
      (0, _uiApi.stopDefaultFor)(evt);
      _focusFirstItem(_refItemFocused);
    } else if (evt.key === _uiApi.KEY_END) {
      (0, _uiApi.stopDefaultFor)(evt);
      _focusLastItem(_refItemFocused);
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