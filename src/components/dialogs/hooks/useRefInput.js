import { 
  useRef,
  useCallback,
  getRefValue
} from '../../uiApi';

const useRefInput = (DF_VALUE) => {
  const _refInput = useRef(null)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _getInputValue = useCallback(() => {
    const _input = getRefValue(_refInput);
    return _input
      ? _input.getValue() || DF_VALUE
      : DF_VALUE;
  }, []);
  //DF_VALUE
  /*eslint-enable react-hooks/exhaustive-deps */
  return [
    _refInput,
    _getInputValue
  ];
};

export default useRefInput
