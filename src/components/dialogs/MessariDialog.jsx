import { useCallback } from 'react';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';

const NEWS_FOR_OPTIONS = [
{caption: "All", value: "all"}
/*,
{caption: "Bitcoin", value: "BTC"},
{caption: "Ethereum", value: "ETH"},
{caption: "Tether", value: "USDT"},
{caption: "XRP", value: "XRP"},
{caption: "Bitcoin-Cash", value: "BCH"},
{ caption: "Chainlink", value: "LINK"},
{ caption: "Cardano", value: "ADA"},
{ caption: "Bitcoin-SV", value: "BSV"},
{ caption: "Litecoin", value: "LTC"},
{ caption: "Binance-Coin", value: "BNB"},
{ caption: "Crypto-Com-Chain", value: "CRO"},
{ caption: "Tezos", value: "XTZ"},
{ caption: "EOS", value: "EOS"},
{ caption: "Stellar", value: "XLM"},
{ caption: "Monero", value: "XMR"},
{ caption: "Tron", value: "TRX"},
{ caption: "Unus-Sed-Leo", value: "LEO"},
{ caption: "USD-Coin", value: "USDC"},
{ caption: "Vechain", value: "VET"},
{ caption: "Cosmos", value: "ATOM"}
*/]
, DF_ASSET_KEY = NEWS_FOR_OPTIONS[0];

const _getRefValue = ref => ref.current;

const MessariDialog = ({
  isShow,
  type,
  source,
  itemConf,
  onLoad,
  onShow,
  onClose
 }) => {
  const [_refDialog, _hClose] = useRefClose(onClose)
  , [_refAssetKey, _selectAssetKey] = useRefSelectOption(DF_ASSET_KEY.value)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
    onLoad({
      type, source, itemConf,
      loadId: 'MS',
      assetKey: _getRefValue(_refAssetKey)
    })
    _hClose()
  }, [])
  // type, source, itemConf, onLoad, _refAssetKey, _hClose
  /*eslint-enable react-hooks/exhaustive-deps */
  , [TS, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <A.DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption="Messari: Blockchain News"
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShow={onShow}
       onClose={_hClose}
    >
       <A.InputSelect
         caption="News about"
         initItem={DF_ASSET_KEY}
         options={NEWS_FOR_OPTIONS}
         styleConfig={TS.SELECT}
         onSelect={_selectAssetKey}
       />
      <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
        <A.Link.Messari />
      </A.Link.PoweredBy>
    </A.DraggableDialog>
  );
};

export default MessariDialog
