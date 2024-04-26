import {
  crInputSelectConfig,
  fGetDialogConfig
} from './DialogFn';

const FEED_OPTIONS = [
  ['All', 'ALL_NEWS_FEEDS'],
  ['Decrypt', 'decrypt'],
  ['CoinDesk', 'coindesk'],
  ['CoinTelegraph', 'cointelegraph'],
  ['CryptoCompare', 'cryptocompare']
]
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
, SORTBY_OPTIONS = [
  ['Latest', 'latest'],
  ['Popular', 'popular']
]
, _crInputConfigs = () => [
  crInputSelectConfig("category", CATEGORY_OPTIONS, {is: true}),
  crInputSelectConfig("feed", FEED_OPTIONS),
  crInputSelectConfig("sortOrder", SORTBY_OPTIONS, {caption: "SortBy"})
]
export const getCryptoCompareConfig = fGetDialogConfig(_crInputConfigs);
