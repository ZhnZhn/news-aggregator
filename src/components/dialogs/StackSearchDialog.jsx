import {
  useCallback,
  getRefValue
} from '../uiApi';

import DateUtil from '../../utils/dt';
import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefInput from './hooks/useRefInput';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';
import { getItemValue } from '../zhn-m-input/OptionFn';
import InputFromToDate from './InputFromToDate';
import { PoweredByStackOverflow } from '../links/PoweredByLink';

const INITIAL_FROM_DATE = DateUtil.getFromDate(1)
, INITIAL_TO_DATE = DateUtil.getToDate()
, _toUTCSecond = DateUtil.toUTCSecond
, SORT_BY_OPTIONS = [
  ["Activity, Recent Day", "activity"],
  ["Creation Date", "creation"],
  ["Score", "votes"],
  ["Relevance", "relevance"],
]
, DF_SORT_BY = SORT_BY_OPTIONS[2]
, INITIAL_SORT_BY_VALUE = getItemValue(DF_SORT_BY)
, DF_TAGGED = 'CSS'
, DF_IN_TITLE = 'flexbox'
, _crInputTitle = (
  prefix,
  dfValue
) => `${prefix} (Default: ${dfValue})`

const StackSearchDialog = ({
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
    _refTagged,
    _getInputTagged
  ] = useRefInput(DF_TAGGED)
  , [
    _refInTitle,
    _getInputInTitle
  ] = useRefInput(DF_IN_TITLE)
  , [
    _refSortBy,
    _selectSortBy
  ] = useRefSelectOption(INITIAL_SORT_BY_VALUE)
  , [
    _refFromDate,
    _getInputFromDate
  ] = useRefInput(INITIAL_FROM_DATE)
  , [
    _refToDate,
    _getInputToDate
  ] = useRefInput(INITIAL_TO_DATE)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
      onLoad({
        type,
        source,
        itemConf,
        loadId: 'SO',
        requestType: 'SEARCH',
        tagged: _getInputTagged(),
        inTitle: _getInputInTitle(),
        sortBy: getRefValue(_refSortBy),
        fromDate: _toUTCSecond(_getInputFromDate()),
        toDate: _toUTCSecond(_getInputToDate())
      })
      _hClose()
  }, [])
  // type, source, itemConf, _hClose
  // ...
  /*eslint-enable react-hooks/exhaustive-deps */
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , _titleTagged = _crInputTitle('Tagged', DF_TAGGED)
  , _titleInTitle = _crInputTitle('In Title', DF_IN_TITLE)

  return (
    <A.DraggableDialog
      ref={_refDialog}
      isShow={isShow}
      style={TS.R_DIALOG}
      captionStyle={TS.BROWSER_CAPTION}
      buttonStyle={TS.BT}
      caption="Search Questions"
      onKeyDown={_hKeyDown}
      onLoad={_hLoad}
      onShow={onShow}
      onClose={_hClose}
    >
       <A.TextField
         style={TS.INPUT_ROOT}
         ref={_refTagged}
         caption={_titleTagged}
         initValue={DF_TAGGED}
       />
       <A.TextField
         style={TS.INPUT_ROOT}
         ref={_refInTitle}
         caption={_titleInTitle}
         initValue={DF_IN_TITLE}
       />
       <A.InputSelect
         caption="SortBy"
         initItem={DF_SORT_BY}
         options={SORT_BY_OPTIONS}
         styleConfig={TS.SELECT}
         onSelect={_selectSortBy}
       />
       <InputFromToDate
         refFromDate={_refFromDate}
         refToDate={_refToDate}
         TS={TS}
         initialFrom={INITIAL_FROM_DATE}
         initialTo={INITIAL_TO_DATE}
       />
      <PoweredByStackOverflow
         style={TS.POWERED_BY}
      />
    </A.DraggableDialog>
  );
};

export default StackSearchDialog
