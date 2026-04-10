import {
  useCallback,
  getRefValue
} from '../../uiApi';
import useRefClose from './useRefClose';

const useDialog = (
  props,
  loadId,
  refInputs
) => {
  const {
    refEl,
    type,
    source,
    itemConf,
    onLoad,
    onClose
  } = props
  , [
    _refDialog,
    _hClose
  ] = useRefClose(onClose, refEl)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    onLoad({
      type,
      source,
      itemConf,
      loadId,
      ...getRefValue(refInputs)
    })
    _hClose()
  }, []);
  //type, source, itemConf, loadId, refInputs, onLoad, _hClose
  /*eslint-enable react-hooks/exhaustive-deps */
  return [
    _refDialog,
    _hLoad,
    _hClose
  ];
};

export default useDialog
