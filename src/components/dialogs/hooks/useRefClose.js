import {
  useRef,
  useCallback
} from '../../uiApi';

const FN_NOOP = () => {};

const useRefClose = (
  onClose=FN_NOOP
) => {
  const _refDialog = useRef(null);
  return [
    _refDialog,
    /*eslint-disable react-hooks/exhaustive-deps */
    useCallback(() => {
      const { current } = _refDialog;
      if (current && current.focusPrevEl) {
        current.focusPrevEl()
      }
      onClose()
    }, [])
   //onClose
   /*eslint-enable react-hooks/exhaustive-deps */
 ];
};

export default useRefClose
