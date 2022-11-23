import styleConfig from './Dialog.Style';

import useRefInputs from './hooks/useRefInputs';
import useDialog from './hooks/useDialog';
import useDecorDialog from './hooks/useDecorDialog';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import FlexColumn from '../zhn-atoms/FlexColumn';
import StackInputs from '../zhn-inputs/StackInputs';

import { getPaneCaption } from './DialogFn';
import { PoweredByTheNewsApi } from '../links/PoweredByLink';
import {
  crDfInputs
} from './DialogFn';
import {
  CATEGORY_OPTIONS,
  DF_CATEGORY
} from './TheNewsApiDialogFn';

const SORT_BY_OPTIONS = [
  ["Relevancy", "relevance_score"],
  ["PublishedAt", " published_at"]
]
, DF_SORT_BY = SORT_BY_OPTIONS[0]
, DF_TERM = "Weather"
, INPUT_CONFIGS = [
  ['t','search',`Term (Default: ${DF_TERM})`,DF_TERM],
  ['s','category','Category',CATEGORY_OPTIONS,DF_CATEGORY],
  ['s','sortBy','SortBy',SORT_BY_OPTIONS,DF_SORT_BY]
]
, INITIAL_INPUTS = crDfInputs(INPUT_CONFIGS);

const TheNewsApiSearchDialog = (props) => {
  const {
    isShow,
    itemConf,
    onShow
  } = props
  , [
    _refInputs,
    _selectInput
  ] = useRefInputs(INITIAL_INPUTS)
  , [
    _refDialog,
    _hLoad,
    _hClose
  ] = useDialog(props, 'TNS', _refInputs)
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , caption =getPaneCaption(itemConf);

  return (
    <DraggableDialog
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
       <FlexColumn>
         <StackInputs
           TS={TS}
           configs={INPUT_CONFIGS}
           onSelect={_selectInput}
         />
         <PoweredByTheNewsApi
           style={TS.POWERED_BY}
         />
      </FlexColumn>
    </DraggableDialog>
  );
};

export default TheNewsApiSearchDialog
