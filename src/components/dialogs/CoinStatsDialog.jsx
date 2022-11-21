import {
  useCallback,
  getRefValue
} from '../uiApi';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefInputs from './hooks/useRefInputs';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';
import StackInputs from '../zhn-inputs/StackInputs';
import { getItemValue } from '../zhn-m-input/OptionFn';

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
, INITIAL_INPUTS = crDfInputs({
  filter: getItemValue(DF_FILTER)
})
, INPUT_CONFIGS = [
  ['s','filter','News filter', NEWS_FILTER_OPTIONS, DF_FILTER]
];

const CoinStatsDialog = ({
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
    _refValues,
    _selectInput
  ] = useRefInputs(INITIAL_INPUTS)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'CS',
      ...getRefValue(_refValues)
    })
    _hClose()
  }, [])
  //type, source, itemConf, onLoad
  /*eslint-enable react-hooks/exhaustive-deps */
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , paneCaption = getPaneCaption(itemConf);

  return (
    <A.DraggableDialog
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
    </A.DraggableDialog>
  );
};

export default CoinStatsDialog
