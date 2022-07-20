import {
  useCallback,
  getRefValue
} from '../uiApi';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';

const SORT_BY_OPTIONS = [
  { caption: 'Top', value: 'top'},
  { caption: 'Popular', value: 'popularity'},
  { caption: 'Newest', value: 'publishedAt' }
]
, DF_SORT_BY = SORT_BY_OPTIONS[0];

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
  const [_refDialog, _hClose] = useRefClose(onClose)
  , [_refSortBy, _selectSortBy] = useRefSelectOption(DF_SORT_BY.value)
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
  , [TS, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <A.DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption={caption}
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShowChart={onShow}
       onClose={_hClose}
    >
      <A.InputSelect
        caption="SortBy"
        initItem={DF_SORT_BY}
        options={SORT_BY_OPTIONS}
        styleConfig={TS.SELECT}
        onSelect={_selectSortBy}
      />
    </A.DraggableDialog>
  );
};

export default DialogType1
