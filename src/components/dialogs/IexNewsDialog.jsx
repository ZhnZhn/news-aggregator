import {
  IEX_CLOUD
} from '../../conf/ProviderNames';

import styleConfig from './Dialog.Style';

import useRefInputs from './hooks/useRefInputs';
import useDialog from './hooks/useDialog';
import useDecorDialog from './hooks/useDecorDialog';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import FlexColumn from '../zhn-atoms/FlexColumn';
import StackInputs from '../zhn-inputs/StackInputs';
import PoweredBy from '../links/PoweredBy';
import { IexApiLink } from '../links/Links';
import {
  crDfInputs
} from './DialogFn';

const RECENT_OPTIONS = [
  ["10 News", "10"],
  ["20 News", "20"],
  ["30 News", "30"],
  ["40 News", "40"],
  ["50 News", "50"],
]
, DF_RECENT = RECENT_OPTIONS[1]
, DF_SYMBOL = "AAPL"
const INPUT_CONFIGS = [
  ['t','symbol','Stock Symbol',DF_SYMBOL,{
    maxLength: '10',
    inputStyle: {
      textTransform: 'uppercase'
    },
    autoCapitalize: 'on'
  }],
  ['s','recent','Recent',RECENT_OPTIONS,DF_RECENT]
]
, INITIAL_INPUTS = crDfInputs(INPUT_CONFIGS);

const IexNewsDialog = (props) => {
  const {
    isShow,
    onShow
  } = props
  , [
    _refInputs,
    _selectInput
  ] = useRefInputs(INITIAL_INPUTS)
  , [
    _refDialog,
    _hLoad,
    _hClose
  ] = useDialog(props, 'IEX', _refInputs)
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <DraggableDialog
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
       <FlexColumn>
         <StackInputs
           TS={TS}
           configs={INPUT_CONFIGS}
           onSelect={_selectInput}
         />
         <PoweredBy style={TS.POWERED_BY}>
           <IexApiLink />
         </PoweredBy>
      </FlexColumn>
    </DraggableDialog>
  );
};

export default IexNewsDialog
