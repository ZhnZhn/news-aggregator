import {
  useCallback,
  getRefValue
} from '../uiApi';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefInput from './hooks/useRefInput';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';
import InputSelect from '../zhn-m-input/InputSelect';
import { getItemValue } from '../zhn-m-input/OptionFn';
import { getPaneCaption } from './DialogFn';
import { PoweredByTheNewsApi } from '../links/PoweredByLink';
import {
  CATEGORY_OPTIONS,
  DF_CATEGORY,
  INITIAL_CAREGORY_VALUE
} from './TheNewsApiDialogFn';

const SORT_BY_OPTIONS = [
  ["Relevancy", "relevance_score"],
  ["PublishedAt", " published_at"]
]
, DF_SORT_BY = SORT_BY_OPTIONS[0]
, INITIAL_SORT_BY_VALUE = getItemValue(DF_SORT_BY)
, DF_TERM = "Weather";

const TheNewsApiSearchDialog = ({
  isShow,
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
    _refInputTerm,
    _getInputTerm
  ] = useRefInput(DF_TERM)
  , [
    _refCategory,
    _selectCategory
  ] = useRefSelectOption(INITIAL_CAREGORY_VALUE)
  , [
    _refSortBy,
    _selectSortBy
  ] = useRefSelectOption(INITIAL_SORT_BY_VALUE)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'TNS',
      search: _getInputTerm(),
      category: getRefValue(_refCategory),
      sortBy: getRefValue(_refSortBy)
    })
    _hClose()
  }, [])
  // type, source, itemConf, onLoad,
  /*eslint-enable react-hooks/exhaustive-deps */
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , caption =getPaneCaption(itemConf)
  , _termCaption = `Term (Default: ${DF_TERM})`;

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
       onShow={onShow}
       onClose={_hClose}
    >
       <A.TextField
         style={TS.INPUT_ROOT}
         ref={_refInputTerm}
         caption={_termCaption}
         initValue={DF_TERM}
         onEnter={_hLoad}
       />
       <InputSelect
         caption="Category"
         initItem={DF_CATEGORY}
         options={CATEGORY_OPTIONS}
         styleConfig={TS.SELECT}
         onSelect={_selectCategory}
       />
       <A.InputSelect
         caption="SortBy"
         initItem={DF_SORT_BY}
         options={SORT_BY_OPTIONS}
         styleConfig={TS.SELECT}
         onSelect={_selectSortBy}
       />
       <PoweredByTheNewsApi
         style={TS.POWERED_BY}
       />
    </A.DraggableDialog>
  );
};

export default TheNewsApiSearchDialog
