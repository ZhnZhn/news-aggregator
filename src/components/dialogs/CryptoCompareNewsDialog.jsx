import DialogStackInputs from './DialogStackInputs';
import { CryptoCompareLink } from '../links/Links';
import {
  crInputSelectConfig,
  fGetDialogConfig,
  getPaneCaption
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
  crInputSelectConfig("sortOrder", SORTBY_OPTIONS, {caption: "SortBy", is: true})
]
, _getDialogConfig = fGetDialogConfig(_crInputConfigs);

const CryptoCompareNewsDialog = (props) => {
  const paneCaption = getPaneCaption(props.itemConf)
  , [
    INPUT_CONFIGS,
    INITIAL_INPUTS,
    TOGGLES,
    IS_INPUTS
  ] = _getDialogConfig();
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
