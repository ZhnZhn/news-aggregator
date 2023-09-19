import {
  useRef,
  useCallback,

  KEY_ARROW_UP,
  KEY_ARROW_DOWN,
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

const _fFocusItem = propName => ref => {
  const _elItem = (getRefValue(ref) || {})[propName];
  if (_elItem) {
    _elItem.scrollIntoView(SCROLL_OPTIONS)
    _elItem.focus()
    setRefValue(ref, _elItem)
  }
};

const _focusNextItem = _fFocusItem('nextSibling');
const _focusPrevItem = _fFocusItem('previousSibling');

const useKeyDownArrow = (
  onClose
) => {
  const _refFocus = useRef()
  /*eslint-disable react-hooks/exhaustive-deps */
  return [
    _refFocus,
    useCallback(evt => {
      if (evt.key === KEY_ARROW_DOWN) {
        stopDefaultFor(evt)
        _focusNextItem(_refFocus)
      } else if (evt.key === KEY_ARROW_UP) {
        stopDefaultFor(evt)
        _focusPrevItem(_refFocus)
      } else if (evt.key === KEY_ESCAPE || evt.key === KEY_TAB) {
        onClose()
      }
    }, [])
    //onClose
    /*eslint-enable react-hooks/exhaustive-deps */
  ];
}

export default useKeyDownArrow
