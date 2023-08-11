import {
  useRef,
  useEffect,
  setRefValue,
  focusRefElement
} from '../uiApi';

const useModalFocus = (
  isShow
) => {
  const _refEl = useRef()
  , _refPrevFocused = useRef();

  useEffect(() => {
    if (isShow) {
      setRefValue(
        _refPrevFocused,
        (document || {}).activeElement
      )
      focusRefElement(_refEl)
    } else {
      focusRefElement(_refPrevFocused)
    }
  }, [isShow])

  return _refEl;
}

export default useModalFocus
