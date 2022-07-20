import {
  useRef,
  useCallback
} from '../../uiApi';

const useRefSelectOption = (DF_VALUE) => {
 const ref = useRef(DF_VALUE || null)
 , _setOptionValue = useCallback(option => {
   ref.current = option ? option.value : void 0
 }, []);
 return [
   ref,
   _setOptionValue
 ]
};

export default useRefSelectOption
