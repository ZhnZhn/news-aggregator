import {
  NEWS_API
} from '../../conf/ProviderNames';

import styleConfig from './Dialog.Style';

import useRefInputs from './hooks/useRefInputs';
import useDialog from './hooks/useDialog';
import useDecorDialog from './hooks/useDecorDialog';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import FlexColumn from '../zhn-atoms/FlexColumn';
import StackInputs from '../zhn-inputs/StackInputs';
import {
  PoweredByNewsApi
} from '../links/PoweredByLink';
import {
  crDfInputs
} from './DialogFn';

const SORT_BY_OPTIONS = [
  ["Relevancy", "relevancy"],
  ["Popularity", "popularity"],
  ["PublishedAt", "publishedAt"]
]
, DF_SORT_BY = SORT_BY_OPTIONS[0]
, DF_TERM = "Weather"
, INPUT_CONFIGS = [
  ['t','symbol',`Term (Default: ${DF_TERM})`,DF_TERM],
  ['s','sortBy','SortBy',SORT_BY_OPTIONS,DF_SORT_BY]
]
, INITIAL_INPUTS = crDfInputs(INPUT_CONFIGS)[0];

const NewsApiSearchDialog = (props) => {
  const {
    isShow,
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
  ] = useDialog(props, 'NS', _refInputs)
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose)

  return (
    <DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption={`${NEWS_API} Search`}
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
         <PoweredByNewsApi
            style={TS.POWERED_BY}
          />
       </FlexColumn>
    </DraggableDialog>
  );
};

export default NewsApiSearchDialog
