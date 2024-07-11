import {
  useRef,
  useCallback,
  setRefValue,
  getRefValue
} from '../uiApi';

const useToggleAccordion = () => {
  const _refTuple = useRef([]);
  return useCallback((is, caption, toggle) => {
    const [
      _prevCaption,
      _prevToggle
    ] = getRefValue(_refTuple);
    if (is) {
      if (!_prevCaption) {
        setRefValue(_refTuple, [caption, toggle])
      } else if (caption !== _prevCaption) {
        _prevToggle()
        setRefValue(_refTuple, [caption, toggle])
      }
    } else {
       if (caption === _prevCaption) {
         setRefValue(_refTuple, [null, null])
       }
    }
  }, []);
};

export default useToggleAccordion
