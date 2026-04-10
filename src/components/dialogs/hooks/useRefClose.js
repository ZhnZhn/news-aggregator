import {
  useRef,
  useCallback
} from '../../uiApi';

const FN_NOOP = () => {};

const useRefClose = (
  onClose=FN_NOOP,
  refEl
) => {
  const _refElDialog = useRef(null)
  , _refDialog = refEl || _refElDialog;
  return [
    _refDialog,
    /*eslint-disable react-hooks/exhaustive-deps */
    useCallback(() => {
      const { current } = _refDialog;
      if (current?.focusPrevEl) {
        current.focusPrevEl()
      }
      onClose()
    }, [])
   //onClose
   /*eslint-enable react-hooks/exhaustive-deps */
 ];
};

export default useRefClose
