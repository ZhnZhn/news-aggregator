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
import { PoweredByNewsApi } from '../links/PoweredByLink';

const SORT_BY_OPTIONS = [
  { caption: "Relevancy", value: "relevancy" },
  { caption: "Popularity", value: "popularity"},
  { caption: "PublishedAt", value: "publishedAt" }
]
, DF_SORT_BY = SORT_BY_OPTIONS[0]
, DF_TERM = "Weather";

const NewsApiSearchDialog = ({
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
    _refSortBy,
    _selectSortBy
  ] = useRefSelectOption(DF_SORT_BY.value)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'NS',
      symbol: _getInputTerm(),
      sortBy: getRefValue(_refSortBy)
    })
    _hClose()
  }, [])
  // type, source, itemConf, onLoad,
  /*eslint-enable react-hooks/exhaustive-deps */
  , [TS, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , _termCaption = `Term (Default: ${DF_TERM})`;

  return (
    <A.DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption="NewsApi Search"
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
       <A.InputSelect
         caption="SortBy"
         initItem={DF_SORT_BY}
         options={SORT_BY_OPTIONS}
         styleConfig={TS.SELECT}
         onSelect={_selectSortBy}
       />
      <PoweredByNewsApi
         style={TS.POWERED_BY}
       />
    </A.DraggableDialog>
  );
};

export default NewsApiSearchDialog
