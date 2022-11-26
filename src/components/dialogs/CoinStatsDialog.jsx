import styleConfig from './Dialog.Style';

import useRefInputs from './hooks/useRefInputs';
import useDialog from './hooks/useRefInputs';
import useDecorDialog from './hooks/useDecorDialog';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import StackInputs from '../zhn-inputs/StackInputs';
import PoweredBy from '../links/PoweredBy';
import { CoinStatsLink } from '../links/Links';
import {
  crDfInputs,
  getPaneCaption
} from './DialogFn';

const NEWS_FILTER_OPTIONS = [
  ["Latest", "latest"],
  ["Handpicked", "handpicked"],
  ["Trending", "trending"],
  ["Bullish", "bullish"],
  ["Bearish", "bearish"]
]
, DF_FILTER = NEWS_FILTER_OPTIONS[0]
, INPUT_CONFIGS = [
  ['s','filter','News filter', NEWS_FILTER_OPTIONS, DF_FILTER]
]
, INITIAL_INPUTS = crDfInputs(INPUT_CONFIGS)[0];

const CoinStatsDialog = (props) => {
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
  ] = useDialog(props, 'CS', _refInputs)
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , paneCaption = getPaneCaption(itemConf);

  return (
    <DraggableDialog
      ref={_refDialog}
      isShow={isShow}
      style={TS.R_DIALOG}
      captionStyle={TS.BROWSER_CAPTION}
      buttonStyle={TS.BT}
      caption={paneCaption}
      onKeyDown={_hKeyDown}
      onLoad={_hLoad}
      onShow={onShow}
      onClose={_hClose}
    >
      <StackInputs
        TS={TS}
        configs={INPUT_CONFIGS}
        onSelect={_selectInput}
      />
      <PoweredBy style={TS.POWERED_BY}>
        <CoinStatsLink />
      </PoweredBy>
    </DraggableDialog>
  );
};

export default CoinStatsDialog
