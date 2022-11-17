import {
  IEX_CLOUD
} from '../../conf/ProviderNames';

import {
  useCallback,
  getRefValue
} from '../uiApi';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefInput from './hooks/useRefInput';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';
import { getItemValue } from '../zhn-m-input/OptionFn';
import PoweredBy from '../links/PoweredBy';
import { IexApiLink } from '../links/Links';

const RECENT_OPTIONS = [
  ["10 News", "10"],
  ["20 News", "20"],
  ["30 News", "30"],
  ["40 News", "40"],
  ["50 News", "50"],
]
, DF_RECENT = RECENT_OPTIONS[1]
, INITIAL_RECENT_VALUE = getItemValue(DF_RECENT)
, DF_SYMBOL = "AAPL"
, S_INPUT_STYLE = {
  textTransform: 'uppercase'
};

const IexNewsDialog = ({
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
  , [
    _refRecent,
    _selectRecent
  ] = useRefSelectOption(INITIAL_RECENT_VALUE)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'IEX',
      symbol: _getInputSymbol().toUpperCase(),
      recent: getRefValue(_refRecent)
    })
    _hClose()
  }, [])
  // type, source, itemConf, onLoad, _getInputSymbol, _refRecent, _hClose
  /*eslint-enable react-hooks/exhaustive-deps */
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <A.DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption={`${IEX_CLOUD}: Stock News`}
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShow={onShow}
       onClose={_hClose}
    >
       <A.TextField
         ref={_refInputSymbol}
         style={TS.INPUT_ROOT}
         inputStyle={S_INPUT_STYLE}
         maxLength="10"
         caption="Stock Symbol"
         initValue={DF_SYMBOL}
         autoCapitalize="on"
         onEnter={_hLoad}
       />
       <A.InputSelect
         caption="Recent"
         initItem={DF_RECENT}
         options={RECENT_OPTIONS}
         styleConfig={TS.SELECT}
         onSelect={_selectRecent}
       />
      <PoweredBy style={TS.POWERED_BY}>
        <IexApiLink />
      </PoweredBy>
    </A.DraggableDialog>
  );
};

export default IexNewsDialog
