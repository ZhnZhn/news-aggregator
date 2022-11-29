import DialogStackInputs from './DialogStackInputs';
import { MessariLink } from '../links/Links';
import {
  crDfInputs,
  getPaneCaption
} from './DialogFn';

const ASSET_OPTIONS = [
["All", "all"]
/*,
[Bitcoin", "BTC"],
[Ethereum", "ETH"],
[Tether", "USDT"],
[XRP", "XRP"],
[Bitcoin-Cash", "BCH"],
["Chainlink", "LINK"],
["Cardano", "ADA"],
["Bitcoin-SV", "BSV"],
["Litecoin", "LTC"],
["Binance-Coin", "BNB"],
["Crypto-Com-Chain", "CRO"],
["Tezos", "XTZ"],
["EOS", "EOS"],
["Stellar", "XLM"],
["Monero", "XMR"],
["Tron", "TRX"],
["Unus-Sed-Leo", "LEO"],
["USD-Coin", "USDC"],
["Vechain", "VET"],
["Cosmos", "ATOM"],
*/]
, DF_ASSET = ASSET_OPTIONS[0]
, INPUT_CONFIGS = [
  ['s','assetKey','News about', ASSET_OPTIONS, DF_ASSET]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const MessariDialog = (props) => {
  const paneCaption = getPaneCaption(props.itemConf);
  return (
    <DialogStackInputs
      {...props}
      caption={paneCaption}
      loadId="MS"
      INPUT_CONFIGS={INPUT_CONFIGS}
      INITIAL_INPUTS={INITIAL_INPUTS}
      TOGGLES={TOGGLES}
      IS_INPUTS={IS_INPUTS}
    >
      <MessariLink />
    </DialogStackInputs>
  );
}

export default MessariDialog
