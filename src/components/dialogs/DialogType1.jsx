import {
  useCallback,
  getRefValue
} from '../uiApi';

import {
  S_BROWSER_CAPTION,
  crInputSelectStyle
} from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefSelectOption from './hooks/useRefSelectOption';
import useKeyDown from './hooks/useKeyDown';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import InputSelect from '../zhn-m-input/InputSelect';
import { getItemValue } from '../zhn-m-input/OptionFn';

const SORT_BY_OPTIONS = [
  ['Top', 'top'],
  ['Popular', 'popularity'],
  ['Newest', 'publishedAt']
]
, DF_SORT_BY = SORT_BY_OPTIONS[0]
, INITIAL_SORTBY_VALUE = getItemValue(DF_SORT_BY)
, INPUT_SELECT_STYLE = crInputSelectStyle();

const DialogType1 = ({
  isShow,
  caption,
  type,
  source,
  itemConf,
  onLoad,
  onShow,
  onClose
}) => {
  const [
    _refDialog,
    _hClose
  ] = useRefClose(onClose)
  , [
    _refSortBy,
    _selectSortBy
  ] = useRefSelectOption(INITIAL_SORTBY_VALUE)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
    onLoad({
      type,
      source,
      itemConf,
      sortBy: getRefValue(_refSortBy)
    })
    _hClose()
  }, [])
  // type, source, itemConf, onLoad
  /*eslint-enable react-hooks/exhaustive-deps */
  , _hKeyDown = useKeyDown(_hLoad, _hClose);


  return (
    <DraggableDialog
       refEl={_refDialog}
       isShow={isShow}
       captionStyle={S_BROWSER_CAPTION}
       caption={caption}
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShowChart={onShow}
       onClose={_hClose}
    >
      <InputSelect
        style={INPUT_SELECT_STYLE}
        caption="SortBy"
        initItem={DF_SORT_BY}
        options={SORT_BY_OPTIONS}
        onSelect={_selectSortBy}
      />
    </DraggableDialog>
  );
};

export default DialogType1
