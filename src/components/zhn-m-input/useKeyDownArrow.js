import {
  useRef,
  useCallback,

  KEY_ARROW_UP,
  KEY_ARROW_DOWN,
  KEY_HOME,
  KEY_END,
  KEY_ESCAPE,
  KEY_TAB,

  getRefValue,
  setRefValue,
  stopDefaultFor
} from '../uiApi';

const SCROLL_OPTIONS = {
  block: 'center',
  behavior: 'smooth'
};

const _setItemFocus = (
  elItem,
  ref
) => elItem
  ? (
  elItem.scrollIntoView(SCROLL_OPTIONS),
  elItem.focus(),
  setRefValue(ref, elItem),
  !0
) : !1;

const _fFocusItem = propName => ref => {
  const _elItem = (getRefValue(ref) || {})[propName];
  return _setItemFocus(_elItem, ref);
};

const _focusNextItem = _fFocusItem('nextSibling');
const _focusPrevItem = _fFocusItem('previousSibling');

const _fFocusParentItem = propName => ref => {
  const _elItem = ((getRefValue(ref) || {}).parentNode || {})[propName];
  _setItemFocus(_elItem, ref)
}

const _focusFirstItem = _fFocusParentItem('firstChild');
const _focusLastItem = _fFocusParentItem('lastChild');

const useKeyDownArrow = (
  onClose
) => {
  const _refItemFocused = useRef()
  /*eslint-disable react-hooks/exhaustive-deps */
  return [
    _refItemFocused,
    useCallback(evt => {
      if (evt.key === KEY_ARROW_DOWN || evt.key === KEY_TAB) {
        stopDefaultFor(evt)
        _focusNextItem(_refItemFocused)
      } else if (evt.key === KEY_ARROW_UP) {
        stopDefaultFor(evt)
        _focusPrevItem(_refItemFocused)
      } else if (evt.key === KEY_HOME) {
        stopDefaultFor(evt)
        _focusFirstItem(_refItemFocused)
      } else if (evt.key === KEY_END) {
        stopDefaultFor(evt)
        _focusLastItem(_refItemFocused)
      } else if (evt.key === KEY_ESCAPE) {
        stopDefaultFor(evt)
        onClose()
      }
    }, [])
    //onClose
    /*eslint-enable react-hooks/exhaustive-deps */
  ];
}

export default useKeyDownArrow
