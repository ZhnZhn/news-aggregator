import {
  useRef,
  useCallback
} from '../../uiApi';

import {
  getItemValue
} from '../../zhn-m-input/OptionFn';

const useRefSelectOption = (DF_VALUE) => {
 const ref = useRef(DF_VALUE || null)
 , _setOptionValue = useCallback(option => {
   ref.current = getItemValue(option)
 }, []);
 return [
   ref,
   _setOptionValue
 ];
};

export default useRefSelectOption
