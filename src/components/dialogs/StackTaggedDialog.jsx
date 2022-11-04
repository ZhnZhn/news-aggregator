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
,  SORT_BY_OPTIONS = [
  ["Activity, Recent Day", "activity"],
  ["Creation Date", "creation"],
  ["Score", "votes"],
  ["Hot Tab", "hot"],
  ["Hot Week Tab", "week"],
  ["Hot Month Tab", "month"]
]
, DF_SORT_BY = SORT_BY_OPTIONS[4]
, INITIAL_SORT_BY_VALUE = getItemValue(DF_SORT_BY)
, DF_TAG = "CSS";

const StackTaggedDialog = ({
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
    _refTag,
    _getInputTag
  ] = useRefInput(DF_TAG)
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
  , _hLoad = useCallback(() => {
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'SO',
      requestType: 'TAG',
      tag: _getInputTag(),
      sortBy: getRefValue(_refSortBy),
      fromDate: _toUTCSecond(_getInputFromDate()),
      toDate: _toUTCSecond(_getInputToDate())
    })
    _hClose()
  }, [])
  //type, source, itemConf, _hClose
  // _getInputTag, _refSortBy, _getInputFromDate, _getInputToDate
  /*eslint-enable react-hooks/exhaustive-deps */
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , _tagCaption = `Tag (Default: ${DF_TAG})`;

  return (
    <A.DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption="Tagged Questions"
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShow={onShow}
       onClose={_hClose}
    >
       <A.TextField
         style={TS.INPUT_ROOT}
         ref={_refTag}
         caption={_tagCaption}
         initValue={DF_TAG}
         onEnter={_hLoad}
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

export default StackTaggedDialog
