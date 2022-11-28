import DialogStackInputs from './DialogStackInputs';
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
  const paneCaption = getPaneCaption(props.itemConf);
  return (
    <DialogStackInputs
      {...props}
      caption={paneCaption}
      loadId="CCN"
      INPUT_CONFIGS={INPUT_CONFIGS}
      INITIAL_INPUTS={INITIAL_INPUTS}
      TOGGLES={TOGGLES}
      IS_INPUTS={IS_INPUTS}
    >
      <CryptoCompareLink />
    </DialogStackInputs>
  );
}

export default CryptoCompareNewsDialog
