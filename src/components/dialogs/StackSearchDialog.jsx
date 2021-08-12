import { useCallback } from 'react';

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
, SORT_BY_OPTIONS = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Relevance", value: "relevance" }
]
, DF_SORT_BY = SORT_BY_OPTIONS[2]
, DF_TAGGED = 'CSS'
, DF_IN_TITLE = 'flexbox'
, _crInputTitle = (prefix, dfValue) => `${prefix} (Default: ${dfValue})`
, _getRefValue = ref => ref.current;

const StackSearchDialog = ({
  isShow,
  type,
  source,
  itemConf,
  onLoad,
  onShow,
  onClose
}) => {
  const [_refDialog, _hClose] = useRefClose(onClose)
  , [_refTagged, _getInputTagged] = useRefInput(DF_TAGGED)
  , [_refInTitle, _getInputInTitle] = useRefInput(DF_IN_TITLE)
  , [_refSortBy, _selectSortBy] = useRefSelectOption(DF_SORT_BY.value)
  , [_refFromDate, _getInputFromDate] = useRefInput(INITIAL_FROM_DATE)
  , [_refToDate, _getInputToDate] = useRefInput(INITIAL_TO_DATE)
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
        sortBy: _getRefValue(_refSortBy),
        fromDate: _toUTCSecond(_getInputFromDate()),
        toDate: _toUTCSecond(_getInputToDate())
      })
      _hClose()
  }, [])
  // type, source, itemConf, _hClose
  // ...
  /*eslint-enable react-hooks/exhaustive-deps */  
  , [TS, _commandButtons, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , _titleTagged = _crInputTitle('Tagged', DF_TAGGED)
  , _titleInTitle = _crInputTitle('In Title', DF_IN_TITLE)

  return (
    <A.DraggableDialog
      ref={_refDialog}
      rootStyle={TS.R_DIALOG}
      browserCaptionStyle={TS.BROWSER_CAPTION}
      styleButton={TS.BT}
      caption="Search Questions"
      isShow={isShow}
      commandButtons={_commandButtons}
      onKeyDown={_hKeyDown}
      onShowChart={onShow}
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
       <div>
          <A.TextField
            ref={_refFromDate}
            caption="From Date"
            hasClear={false}
            style={TS.INPUT_DATE}
            initValue={INITIAL_FROM_DATE}
            errorMsg={DATE_ERR_MSG}
            onTest={_onTestDate}
          />
          <A.TextField
            ref={_refToDate}
            caption="To Date"
            hasClear={false}
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

export default StackSearchDialog
