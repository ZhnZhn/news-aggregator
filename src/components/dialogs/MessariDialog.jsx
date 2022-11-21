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
, INITIAL_INPUTS = crDfInputs({
  assetKey: getItemValue(DF_ASSET)
})
, INPUT_CONFIGS = [
  ['s','assetKey','News about', ASSET_OPTIONS, DF_ASSET]
];

const MessariDialog = ({
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
  , _hLoad = useCallback(()=>{
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'MS',
      ...getRefValue(_refValues)
      //assetKey: getRefValue(_refAssetKey)
    })
    _hClose()
  }, [])
  // type, source, itemConf, onLoad, _hClose
  /*eslint-enable react-hooks/exhaustive-deps */
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , paneCaption  = getPaneCaption(itemConf);

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
        <MessariLink />
      </PoweredBy>
    </A.DraggableDialog>
  );
};

export default MessariDialog
