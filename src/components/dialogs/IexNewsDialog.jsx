import { useCallback } from 'react';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefInput from './hooks/useRefInput';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';

const RECENT_OPTIONS = [
  { caption: "10 News", value: "10" },
  { caption: "20 News", value: "20" },
  { caption: "30 News", value: "30" },
  { caption: "40 News", value: "40" },
  { caption: "50 News", value: "50" }
]
, DF_RECENT = RECENT_OPTIONS[1]
, DF_SYMBOL = "AAPL";

const _getRefValue = ref => ref.current;

const IexNewsDialog = ({
  isShow,
  type,
  source,
  itemConf,
  onLoad,
  onShow,
  onClose
}) => {
  const [_refDialog, _hClose] = useRefClose(onClose)
  , [_refInputSymbol, _getInputSymbol] = useRefInput(DF_SYMBOL)
  , [_refRecent, _selectRecent] = useRefSelectOption(DF_RECENT.value)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
    onLoad({
      type, source, itemConf,
      loadId: 'IEX',
      symbol: _getInputSymbol(),
      recent: _getRefValue(_refRecent)
    })
    _hClose()
  }, [])
  // type, source, itemConf, onLoad, _getInputSymbol, _refRecent, _hClose
  /*eslint-enable react-hooks/exhaustive-deps */
  , [TS, _commandButtons, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <A.DraggableDialog
         ref={_refDialog}
         rootStyle={TS.R_DIALOG}
         browserCaptionStyle={TS.BROWSER_CAPTION}
         styleButton={TS.BT}
         caption="IEX Cloud: Stock News"
         isShow={isShow}
         commandButtons={_commandButtons}
         onKeyDown={_hKeyDown}
         onShowChart={onShow}
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
       <A.InputSelect
         caption="Recent"
         initItem={DF_RECENT}
         options={RECENT_OPTIONS}
         styleConfig={TS.SELECT}
         onSelect={_selectRecent}
       />
      <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
        <A.Link.IexApi />
      </A.Link.PoweredBy>
    </A.DraggableDialog>
  );
};

export default IexNewsDialog
