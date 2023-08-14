import {
  useEffect,
  focusAsyncRefElement
} from '../uiApi';

const useFocusAsyncRefElementIf = (
  is,
  refOrFn,
  mls
) => {
  useEffect(() => {
    if (is) {
      focusAsyncRefElement(refOrFn, mls)
    }
  }, [is, refOrFn, mls])
}

export default useFocusAsyncRefElementIf
