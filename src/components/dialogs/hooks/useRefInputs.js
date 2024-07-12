import {
  isStr,
  useRef,
  useCallback
} from '../../uiApi';

import {
  getItemValue
} from '../../zhn-m-input/OptionFn';

const useRefInputs = (
  dfValues
) => {
  const _refValues = useRef(dfValues || Object.create(null))
  , _setValue = useCallback((input, id) => {
    if (isStr(id)) {
      _refValues.current[id] = isStr(input)
        ? input === ''
            ? dfValues[id]
            : input
        : getItemValue(input)
    }
  }, [dfValues]);
  return [
    _refValues,
    _setValue
  ];
}

export default useRefInputs
