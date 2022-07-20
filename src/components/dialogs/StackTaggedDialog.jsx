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

const DATE_ERR_MSG = "YYYY-MM-DD";

const INITIAL_FROM_DATE = DateUtil.getFromDate(1)
, INITIAL_TO_DATE = DateUtil.getToDate()
, _onTestDate = DateUtil.isValidDate
, _toUTCSecond = DateUtil.toUTCSecond
,  SORT_BY_OPTIONS = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Hot Tab", value: "hot" },
  { caption: "Hot Week Tab", value: "week" },
  { caption: "Hot Month Tab", value: "month" }
]
, DF_SORT_BY = SORT_BY_OPTIONS[4]
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
  const [_refDialog, _hClose] = useRefClose(onClose)
  , [_refTag, _getInputTag] = useRefInput(DF_TAG)
  , [_refSortBy, _selectSortBy] = useRefSelectOption(DF_SORT_BY.value)
  , [_refFromDate, _getInputFromDate] = useRefInput(INITIAL_FROM_DATE)
  , [_refToDate, _getInputToDate] = useRefInput(INITIAL_TO_DATE)
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
  , [TS, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose)
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
      <div>
      <A.TextField
        ref={_refFromDate}
        hasClear={false}
        caption="From Date"
        style={TS.INPUT_DATE}
        initValue={INITIAL_FROM_DATE}
        errorMsg={DATE_ERR_MSG}
        onTest={_onTestDate}
      />
      <A.TextField
        ref={_refToDate}
        hasClear={false}
        caption="To Date"
        style={TS.INPUT_DATE}
        initValue={INITIAL_TO_DATE}
        errorMsg={DATE_ERR_MSG}
        onTest={_onTestDate}
      />
      </div>

      <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
        <A.Link.StackOverflow />
      </A.Link.PoweredBy>
    </A.DraggableDialog>
  );
};

export default StackTaggedDialog
