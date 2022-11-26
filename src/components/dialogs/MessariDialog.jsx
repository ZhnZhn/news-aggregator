import styleConfig from './Dialog.Style';

import useRefInputs from './hooks/useRefInputs';
import useDialog from './hooks/useDialog';
import useDecorDialog from './hooks/useDecorDialog';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import StackInputs from '../zhn-inputs/StackInputs';
import PoweredBy from '../links/PoweredBy';
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
, INITIAL_INPUTS = crDfInputs(INPUT_CONFIGS)[0];

const MessariDialog = (props) => {
  const {
    isShow,
    itemConf,
    onShow,
  } = props
  , [
    _refInputs,
    _selectInput
  ] = useRefInputs(INITIAL_INPUTS)
  , [
    _refDialog,
    _hLoad,
    _hClose
  ] = useDialog(props, 'MS', _refInputs)
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , paneCaption  = getPaneCaption(itemConf);

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
        <MessariLink />
      </PoweredBy>
    </DraggableDialog>
  );
};

export default MessariDialog
