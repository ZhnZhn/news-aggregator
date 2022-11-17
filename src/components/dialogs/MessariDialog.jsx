import {
  useCallback,
  getRefValue
} from '../uiApi';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';
import { getItemValue } from '../zhn-m-input/OptionFn';
import PoweredBy from '../links/PoweredBy';
import { MessariLink } from '../links/Links';
import { getPaneCaption } from './DialogFn';

const NEWS_FOR_OPTIONS = [
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
, DF_ASSET = NEWS_FOR_OPTIONS[0]
, INITIAL_ASSET_VALUE = getItemValue(DF_ASSET);

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
    _refAssetKey,
    _selectAssetKey
  ] = useRefSelectOption(INITIAL_ASSET_VALUE)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'MS',
      assetKey: getRefValue(_refAssetKey)
    })
    _hClose()
  }, [])
  // type, source, itemConf, onLoad, _refAssetKey, _hClose
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
       <A.InputSelect
         caption="News about"
         initItem={DF_ASSET}
         options={NEWS_FOR_OPTIONS}
         styleConfig={TS.SELECT}
         onSelect={_selectAssetKey}
       />
      <PoweredBy style={TS.POWERED_BY}>
        <MessariLink />
      </PoweredBy>
    </A.DraggableDialog>
  );
};

export default MessariDialog
