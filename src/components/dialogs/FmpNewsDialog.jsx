import { useCallback } from '../uiApi';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefInput from './hooks/useRefInput';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';
import PoweredBy from '../links/PoweredBy';
import { FmpApiLink } from '../links/Links';

const DF_SYMBOL = "AAPL";

const FmpNewsDialog = ({
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
    _refInputSymbol,
    _getInputSymbol
  ] = useRefInput(DF_SYMBOL)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'FMP',
      symbol: _getInputSymbol(),
    })
    _hClose()
  }, [])
  //type, source, itemConf, onLoad, _getInputSymbol
  /*eslint-enable react-hooks/exhaustive-deps */
  , [TS, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <A.DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption="FMP: Stock News"
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShow={onShow}
       onClose={_hClose}
    >
       <A.TextField
         ref={_refInputSymbol}
         style={TS.INPUT_ROOT}
         maxLength="10"
         caption="Stock Symbol"
         initValue={DF_SYMBOL}
         autoCapitalize="on"
         onEnter={_hLoad}
       />
      <PoweredBy style={TS.POWERED_BY}>
        <FmpApiLink />
      </PoweredBy>
    </A.DraggableDialog>
  );
}

export default FmpNewsDialog
