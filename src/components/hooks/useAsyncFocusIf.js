import {
  useEffect,
  focusAsyncRefElement
} from '../uiApi';

const useAsyncFocusIf = (
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

export default useAsyncFocusIf
