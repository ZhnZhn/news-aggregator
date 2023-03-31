import {
  useRef,
  useCallback,
  useEffect,
  getRefValue
} from '../uiApi';

const _removeClickListener = (
  listener,
  refIs
) => {
  if (getRefValue(refIs)) {
    document.removeEventListener('click', listener, true);
    refIs.current = null
  }
};

const useClickOutside = (
  isShow,
  onClose
) => {
  const _refElement = useRef(null)
  , _refIs = useRef(null)

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClickOutside = useCallback(evt => {
      const _element = getRefValue(_refElement) || {};
      if (_element.contains && !_element.contains(evt.target)){
        evt.stopPropagation()
        onClose()
      }
  }, []);
  // onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  useEffect(() => {
    if (isShow && !_refIs.current) {
      document.addEventListener('click', _hClickOutside, true)
      _refIs.current = true
    } else if (!isShow) {
      _removeClickListener(_hClickOutside, _refIs)
    }
  })

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => () => _removeClickListener(
    _hClickOutside,
    _refIs
  ), [])
  // _hClickOutside
  /*eslint-enable react-hooks/exhaustive-deps */

  return _refElement;
}

export default useClickOutside
