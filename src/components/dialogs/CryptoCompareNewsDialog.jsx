import styleConfig from './Dialog.Style';

import useToggleState from '../hooks/useToggleState';
import useRefInputs from './hooks/useRefInputs';
import useDialog from './hooks/useDialog';
import useDecorDialog from './hooks/useDecorDialog';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import FlexColumn from '../zhn-atoms/FlexColumn';
import StackInputs from '../zhn-inputs/StackInputs';
import PoweredBy from '../links/PoweredBy';
import { CryptoCompareLink } from '../links/Links';
import {
  crDfInputs,
  getPaneCaption
} from './DialogFn';

const FEED_OPTIONS = [
  ['All', 'ALL_NEWS_FEEDS'],
  ['Decrypt', 'decrypt'],
  ['CoinDesk', 'coindesk'],
  ['CoinTelegraph', 'cointelegraph'],
  ['CryptoCompare', 'cryptocompare']
]
, DF_FEED = FEED_OPTIONS[0]
, CATEGORY_OPTIONS = [
  ['All', 'ALL_NEWS_CATEGORIES'],
  ['Altcoin'],
  ['Asia'],
  ['Blockchain'],
  ['Business'],
  ['Commodity'],
  ['Exchange'],
  ['Fiat'],
  ['ICO'],
  ['Market'],
  ['Mining'],
  ['Regulation'],
  ['Trading'],
  ['Technology'],
  ['Sponsored'],
  ['Wallet']
]
, DF_CATEGORY = CATEGORY_OPTIONS[0]
, SORTBY_OPTIONS = [
  ['Latest', 'latest'],
  ['Popular', 'popular']
], DF_SORTBY = SORTBY_OPTIONS[0]
, INPUT_CONFIGS = [
  ['s','category', 'Category', CATEGORY_OPTIONS, DF_CATEGORY, true],
  ['s','feed', 'Feed', FEED_OPTIONS, DF_FEED],
  ['s','sortOrder', 'SortBy', SORTBY_OPTIONS, DF_SORTBY, true]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const CryptoCompareNewsDialog = (props) => {
  const {
    isShow,
    itemConf,
    onShow
  } = props
  , [
    isInputs,
    toggleInput
  ] = useToggleState(IS_INPUTS)
  , [
    _refInputs,
    _selectInput
  ] = useRefInputs(INITIAL_INPUTS)
  , [
    _refDialog,
    _hLoad,
    _hClose
  ] = useDialog(props, 'CCN', _refInputs)
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
       chbStroke={TS.R_DIALOG.backgroundColor}
       caption={paneCaption}
       menuToggle={TOGGLES}
       toggleItem={toggleInput}
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShow={onShow}
       onClose={_hClose}
    >
      <FlexColumn>
        <StackInputs
          TS={TS}
          isInputs={isInputs}
          configs={INPUT_CONFIGS}
          onSelect={_selectInput}
        />
        <PoweredBy style={TS.POWERED_BY}>
          <CryptoCompareLink />
        </PoweredBy>
      </FlexColumn>
    </DraggableDialog>
  );
};

export default CryptoCompareNewsDialog
